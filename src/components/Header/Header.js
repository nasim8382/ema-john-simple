import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;