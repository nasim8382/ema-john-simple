import React, { useState } from 'react';
import './Login.css';
import icon from '../../images/icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate('/orders');
    }

    const handleSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div className='form-bg'>
                <div className='form-container'>
                    <div>
                        <h2 className='form-title'>Login</h2>
                        <form onSubmit={handleSignIn}>
                            <div className='input-group'>
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmailBlur} type="email" name="email" required/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePasswordBlur} type="password" name="password" required/>
                            </div>
                            <p className='error-text'>{error?.message}</p>
                            {
                                loading && <p className='loading-text'>Loading....</p>
                            }
                            <input className='form-submit' type="submit" value="Login" />
                        </form>
                        <p className='form-text'>New to Ema-john?
                            <Link className='form-link' to='/signup'>Create New Account</Link>
                        </p>
                        <div  className='or-text'>
                            <div className='straight-line'></div>
                            <p>or</p>
                            <div className='straight-line'></div>
                        </div>
                        <button className='google-sign-in-btn'>
                            <img src={icon} alt="google-icon" />
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;