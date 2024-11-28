import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './LoginForm.css';
import { FaUserCircle, FaLock } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = () => {
    // State to manage form input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const client = axios.create({
        baseURL: "/api"
    })

    const handleData = async (e) => {
        e.preventDefault();


        client.post('/api/login', {
            username: username,
            password: password
        })
            .then((response) => {
                console.log(response);
                toast.success("hello", {
                    position: "top-right",
                    style: { width: "30vw" },
                    autoClose: 3000
                })

            })
            .catch((err) => {
                console.log(err.response.data.message)
                toast.error(err.response.data.message, {
                    position: "top-right",
                    style: { width: "30vw" },
                    autoClose: 3000
                });
            })

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
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='#'><Link to="/Forgot">Forgot password</Link></a>
                    </div>

                    <button type='submit' className='text-green-700 hover:bg-green-400 hover:text-white'>Login</button>

                    <div className='register-link'>
                        <p>Dont have an account? <b><a href='#'><Link to="/Login2">Sign Up</Link></a></b> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;