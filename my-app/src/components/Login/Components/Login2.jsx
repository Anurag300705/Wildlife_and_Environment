import React, { useState } from 'react';
import './Login2.css'
import { FaUserCircle, FaLock } from "react-icons/fa";

export const Login2 = () => {
    // State to manage form input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleData = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/login2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            window.location.href = 'http://localhost:5173';
            console.prompt('account created successfully')
        } else {
            console.error('Failed to create account');
        }
    }
    return (
        <div className='whole'>
            <div className='wrapper'>
                <form onSubmit={handleData} >
                    <h1>Sign Up</h1>
                    <div className='input-box'>
                        <input type="text"
                            placeholder='Create Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                        <FaUserCircle className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type="text"
                            placeholder='Enter Email'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                        <FaUserCircle className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type="password"
                            placeholder='Create Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                    </div>

                    <button type='submit' className='text-green-700 hover:bg-green-400 hover:text-white'>Create Account</button>

                </form>
            </div>
        </div>
    )
}

export default Login2;