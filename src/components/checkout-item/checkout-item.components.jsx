import {
  CheckoutItemContainer,
  BaseSpan,
  ImageContainer,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemhandler = () => clearItemFromCart(cartItem);
  const addItemhandler = () => addItemToCart(cartItem);
  const removeItemhandler = () => removeItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemhandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemhandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
