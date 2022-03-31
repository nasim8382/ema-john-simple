import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = (totalPrice + shipping + tax).toFixed(2);

    return (
        <div className='cart-summary'>
            <h2>Order Summary</h2>
                <div className='order-text'>
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                </div>
                <h3>Grand Total: ${grandTotal}</h3>
                {props.children}
        </div>
    );
};

export default Cart;