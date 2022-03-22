import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    // const {handleAddToCart, product} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p id='product-name'>{name.slice(0, 20)}</p>
                <p id='product-price'>Price: ${price}</p>
                <p id='product-seller'>Manufacturer: {seller}</p>
                <p id='product-ratings'>Rating: {ratings}</p>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon className='cart-icon' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;