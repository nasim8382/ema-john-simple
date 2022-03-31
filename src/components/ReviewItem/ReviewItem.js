import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css';

const ReviewItem = ({product, removeSingleItem}) => {
    const {id, name, price, shipping, img, quantity} = product;
    return (
        <div className='single-product'>
            <div className='product-img'>
                <img src={img} alt="product" />
            </div>
            <div className='product-text'>
                <h4 title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h4>
                <h5>Quantity: <span className='quantity'>{quantity}</span></h5>
                <h6>Price: <span>${price}</span></h6>
                <p>Shipping Charge: <span>${shipping}</span></p>
            </div>
            <div onClick={() => removeSingleItem(id)} className='product-icon'>
                <FontAwesomeIcon className='cart-clear-icon' icon={faTrashCan}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default ReviewItem;