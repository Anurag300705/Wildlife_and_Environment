import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css';
import { FaUserCircle, FaLock } from "react-icons/fa";

export const LoginForm = () => {
    return (
        <div className='whole'>
            <div className='wrapper'>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Enter Username' required />
                        <FaUserCircle className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type="password" placeholder='Enter Password' required />
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