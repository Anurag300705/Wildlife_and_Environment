import React, { useState } from 'react';
import './Login2.css'
import { FaUserCircle, FaLock } from "react-icons/fa";

export const Login2 = () => {
    return (
        <div className='whole'>
            <div className='wrapper'>
                <form action='/user' method='POST'>
                    <h1>Sign Up</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Create Username' required />
                        <FaUserCircle className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type="password" placeholder='Create Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                    </div>

                    <button type='submit'>Create Account</button>

                </form>
            </div>
        </div>
    )
}

export default Login2;