import React, { useState } from 'react';
import './Forgot.css'
import { FaUserCircle, FaLock } from "react-icons/fa";

export const Forgot = () => {
    return (
        <div className='whole'>
            <div className='wrapper'>
                <form action=''>
                    <h1>Retrieve Password</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Enter Email Address' required />
                        <FaUserCircle className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <p>This will send a OTP to the email address you have mentioned</p>
                    </div>

                    <button type='submit'>Send OTP</button>

                </form>
            </div>
        </div>
    )
}

export default Forgot;