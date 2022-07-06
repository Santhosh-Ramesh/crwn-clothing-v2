import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown (1).svg';

//import './navigation.styles.jsx';

import CartIcon from '../../components/cart-icon/cart-icon.components';
import CartDropdown from './../../components/cart-dropdown/cart-dropdown.components';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';




const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  console.log(
    'isCartOpen isCartOpen',
    isCartOpen,
    useSelector(selectIsCartOpen)
  );

  const signOutUser = () => dispatch(signOutStart());

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
