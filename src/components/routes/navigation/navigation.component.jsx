import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from './../../../assets/crown (1).svg';
import { UserContext } from '../../contexts/user.context';
//import './navigation.styles.jsx';
import { signOutUser } from './../../../utils/firebase/firebase.utils';
import CartIcon from '../../cart-icon/cart-icon.components';
import CartDropdown from './../../cart-dropdown/cart-dropdown.components';
import { CartContext } from './../../contexts/cart.context';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from './../../../store/user/user.selector';


const Navigation = () => {
  //const { currentUser } = useContext(UserContext);
  //   const signOutHandler = async () => {
  //     await signOutUser();
  //   };


  const currentUser = useSelector((state) => state.user.currentUser);

console.log("currentUser",currentUser)
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
