import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../images/icon.png';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match!!!');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or more');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div className='form-bg-sign-up'>
                <div className='form-container-sign-up'>
                    <div>
                        <h2 className='form-title'>Sign Up</h2>
                        <form onSubmit={handleCreateUser}>
                            <div className='input-group'>
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmailBlur} type="email" name="email" required/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePasswordBlur} type="password" name="password" required/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required/>
                            </div>
                            <p className='error-text'>{error}</p>
                            <input className='form-submit' type="submit" value="Sign Up" />
                        </form>
                        <p className='form-text'>Already have an account?
                            <Link className='form-link' to='/login'>Login</Link>
                        </p>
                        <div  className='or-text or-text-sign-up'>
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

export default SignUp;