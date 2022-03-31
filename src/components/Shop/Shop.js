import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddToCart = (selectedProduct) => {
        let newCart;
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    const removeAll = () => {
        setCart([]);
        deleteShoppingCart();
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
                <Cart cart={cart}>
                    <div className='cart-button'>
                        <button onClick={removeAll} className='clear-btn'>
                            <div className='clear-btn-div'>
                                <p>Clear Cart</p>
                                <FontAwesomeIcon className='clear-icon' icon={faTrashCan}></FontAwesomeIcon>
                            </div>
                        </button>
                        <CustomLink to="/orders">
                            <button className='review-btn'>
                                <div className='review-btn-div'>
                                    <p>Review Order</p>
                                    <FontAwesomeIcon className='review-icon' icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                            </button>
                        </CustomLink>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;