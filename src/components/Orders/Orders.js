import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';
import './Orders.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const removeAll = () => {
        setCart([]);
        deleteShoppingCart();
    };

    const removeSingleItem = id => {
        setCart(cart.filter(product => product.id !== id));
        removeFromDb(id);
    }

    return (
        <div className='orders-container'>
            <div className='ordered-items'>
                {
                    cart.map( product => <ReviewItem 
                        key={product.id}
                         product={product}
                         removeSingleItem={removeSingleItem}
                        ></ReviewItem>)
                }
            </div>
            <div className='orders-summary'>
                <Cart cart={cart} removeAll={removeAll}>
                    <div className='cart-button'>
                        <button onClick={removeAll} className='clear-btn'>
                            <div className='orders-clear-btn'>
                                <p>Clear Cart</p>
                                <FontAwesomeIcon className='clear-icon' icon={faTrashCan}></FontAwesomeIcon>
                            </div>
                        </button>
                        {/* <CustomLink to="/inventory"> */}
                            <button onClick={() => navigate('/inventory')} className='review-btn'>
                                <div className='orders-review-btn'>
                                    <p>Proceed Checkout</p>
                                    <FontAwesomeIcon className='review-icon' icon={faCreditCard}></FontAwesomeIcon>
                                </div>
                            </button>
                        {/* </CustomLink> */}
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;