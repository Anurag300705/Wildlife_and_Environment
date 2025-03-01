import React, { useState } from 'react';
import './Login2.css'
import { FaUserCircle, FaLock } from "react-icons/fa";
import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login2 = () => {
    // State to manage form input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    //acces backend 
    const client = axios.create({
        baseURL: "/api"
    })

    const handleData = async (e) => {
        e.preventDefault();


        client.post('/api/v1/user/signup', {
            username: username,
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response.message);
                toast.success("Signup successful!", {
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
                <ToastContainer />
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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