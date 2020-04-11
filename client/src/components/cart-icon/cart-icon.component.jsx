import React, { useContext } from 'react';

import {CartContext} from '../../providers/cart/cart.provider';


import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = () => {
  const { toggleCartHidden, cartItemsCount } = useContext(CartContext);
  return(
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
  </CartContainer>
)
};

export default CartIcon;
