

// import Animal from './dropdown/animal'
// import Exchange from './pages/EXCHANGE_COMP/EXCHANGE'


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // console.log($('./profile'))
    return (
        <nav className='sticky top-0 z-50 '>
            <Link to="/" className="title"><h1>Website</h1></Link>
            <ul className='navSec'>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/event">Event</Link>
                </li>
                <li>
                    <Link to="/ContactUs">Contact Us</Link>
                </li>
                <li>
                    <h5 className='absolute mt-[2.2px] ml-[5px] text-white'>Animal</h5>
                    <div className='dropdown'>
                        <ul className='drpdwn'>
                            <li>
                                <Link to="/exchange">Exchange</Link>
                            </li>
                            <li>
                                <Link to="/NEW_BORN">New born</Link>
                            </li>
                            <li>
                                <Link to="/Rescue">Rescue Animals</Link>
                            </li>
                            <li>
                                <Link to="/Special_Animals"> Special Animals</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;

