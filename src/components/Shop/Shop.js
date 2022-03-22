import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <div className='order-text'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${}</p>
                    <p>Total Shipping Charge: ${}</p>
                    <p>Tax: ${}</p>
                </div>
                <h3>Grand Total: ${}</h3>
                <div className='order-button'>
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
        </div>
    );
};

export default Shop;