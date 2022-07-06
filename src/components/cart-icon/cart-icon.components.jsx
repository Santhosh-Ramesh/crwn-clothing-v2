import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';

import { setIsCartOpen } from '../../store/cart/cart.action.js';

import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector.js';

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
console.log("isCartOpen",isCartOpen)
  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
