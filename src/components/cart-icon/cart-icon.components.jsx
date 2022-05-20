import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

import { useContext } from 'react';
import { CartContext } from './../../components/contexts/cart.context';
const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
