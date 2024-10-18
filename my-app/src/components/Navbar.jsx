

// import Animal from './dropdown/animal'
// import Exchange from './pages/EXCHANGE_COMP/EXCHANGE'


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // console.log($('./profile'))
    return (
        <nav>
            <Link to="/" className="title"><h1>Website</h1></Link>
            <ul className='navSec'>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                    <h4>Animal</h4>
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
                <li><div className="profile">hello</div></li>
            </ul>
        </nav>
    );
};

export default Navbar;

