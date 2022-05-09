import Home from './components/routes/home/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component.jsx';
import SignIn from './components/routes/sign-in/sign-in.component.jsx';
const Shop = ()=>{
  return(
    <div>
      <h1>This is the shop page</h1>
    </div>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
