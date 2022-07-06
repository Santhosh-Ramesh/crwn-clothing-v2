import Home from './routes/home/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';
import Shop from './routes/shop/shop.components.jsx';
import Checkout from './routes/checkout/checkout.components.jsx';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCurrentUser,
} from './utils/firebase/firebase.utils.js';
import { useEffect } from 'react';
import { checkUserSession } from './store/user/user.action.js';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
