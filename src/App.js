import Home from './components/routes/home/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component.jsx';
import Authentication from './components/routes/authentication/authentication.component.jsx';
import Shop from './components/routes/shop/shop.components.jsx';
import Checkout from './components/routes/checkout/checkout.components.jsx';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils.js';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action.js';
import { useDispatch } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      console.log("app js", user)
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubcribe;
  }, [dispatch]);

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
