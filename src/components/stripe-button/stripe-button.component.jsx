import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_I1EtbGOWq7Ytjo2qfpBtoCj300lZyMbmCq';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='SS Clothing Ltd.'
            billingAddress
            shippingAddress
            bitcoin
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    );

}

export default StripeCheckoutButton;