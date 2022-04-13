import React from 'react';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <div className='link-items'>
                <CustomLink to="/">Shop</CustomLink>
                <CustomLink to="/orders">Orders</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                {/* <CustomLink to="/signup">SignUp</CustomLink> */}
                <CustomLink to="/login">Login</CustomLink>
            </div>
        </div>
    );
};

export default Header;