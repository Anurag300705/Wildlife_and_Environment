import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './LoginForm.css';
import { FaUserCircle, FaLock } from "react-icons/fa";

export const LoginForm = () => {
    // State to manage form input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleData = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        // if (response.ok) {
        //     window.location.href = 'http://localhost:5173';
        //     console.prompt('account created successfully')
        // } else {
        //     console.error('Failed to create account');
        // }
    }
    return (
        <div className='whole'>
            <div className='wrapper'>
                <form onSubmit={handleData}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text"
                            placeholder='Enter Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                        <FaUserCircle className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type="password"
                            placeholder='Enter'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='#'><Link to="/Forgot">Forgot password</Link></a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Dont have an account? <b><a href='#'><Link to="/Login2">Sign Up</Link></a></b> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;