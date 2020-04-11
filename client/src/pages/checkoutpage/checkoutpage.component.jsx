import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkoutpage-styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className='checkout-page'>

            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id}
                        cartItem={cartItem} />
                )}
                <div className='total'>
                    <span>TOTAL: ${cartTotal}</span>
                </div>
            </div>
            <div className='test-warning'>
                *PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENT*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123

        </div>
            <StripeCheckoutButton price={cartTotal} />
        </div>
    )
}

export default CheckoutPage;