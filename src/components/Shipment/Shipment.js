import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameBlur = e => {
        setName(e.target.value);
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handleAddressBlur = e => {
        setAddress(e.target.value);
    }

    const handlePhoneBlur = e => {
        setPhone(e.target.value);
    }

    const handleShipping = e => {
        e.preventDefault();
    }

    return (
        <div>
            <div className='form-bg-sign-up'>
                <div className='form-container-sign-up'>
                    <div>
                        <h2 className='form-title'>Shipping information</h2>
                        <form onSubmit={handleShipping}>
                        <div className='input-group'>
                                <label htmlFor="name">Name</label>
                                <input onBlur={handleNameBlur} type="text" name="name" required/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmailBlur} type="email" name="email" required/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="Address">Address</label>
                                <input onBlur={handleAddressBlur} type="text" name="address" required/>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="phone">Phone Number</label>
                                <input onBlur={handlePhoneBlur} type="text" name="phone" required/>
                            </div>
                            <input className='form-submit' type="submit" value="Add Shipping" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;