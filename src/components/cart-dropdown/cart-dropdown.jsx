import React from 'react';

import './cart-dropdown.styles.scss';
import Button from '../button/button';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <Button>CHECKOUT</Button>
    </div>
);

export default CartDropdown;