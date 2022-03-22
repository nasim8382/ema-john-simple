import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart-summary'>
            <h2>Order Summary</h2>
                <div className='order-text'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${}</p>
                    <p>Total Shipping Charge: ${}</p>
                    <p>Tax: ${}</p>
                </div>
                <h3>Grand Total: ${}</h3>
                <div className='cart-button'>
                    <button className='clear-btn'>
                        <div className='clear-btn-div'>
                            <p>Clear Cart</p>
                            <FontAwesomeIcon className='clear-icon' icon={faTrashCan}></FontAwesomeIcon>
                        </div>
                    </button>
                    <button className='review-btn'>
                        <div className='review-btn-div'>
                            <p>Review Order</p>
                            <FontAwesomeIcon className='review-icon' icon={faArrowRight}></FontAwesomeIcon>
                        </div>
                    </button>
                </div>
        </div>
    );
};

export default Cart;