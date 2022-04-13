import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <div className='link-items'>
                <CustomLink to="/">Shop</CustomLink>
                <CustomLink to="/orders">Orders</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                {
                    user ?
                    <CustomLink onClick={handleSignOut} to="/login">Sign Out</CustomLink> :
                    // <button className='sign-out-btn' onClick={handleSignOut}>Sign Out</button> 
                    <CustomLink to="/login">Login</CustomLink>
                }
            </div>
        </div>
    );
};

export default Header;