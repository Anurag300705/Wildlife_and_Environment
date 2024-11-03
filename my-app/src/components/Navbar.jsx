import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <nav>
            <Link to="/" className="title">
                <h1>Website</h1>
            </Link>
            
            <button className="menu-icon" onClick={toggleDrawer}>
                ☰
            </button>

            {/* Off-canvas drawer */}
            <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
                <button className="close-icon" onClick={toggleDrawer}>✕</button>
                <ul className='navSec'>
                    <li><Link to="/Login" onClick={toggleDrawer}>Login</Link></li>
                    <li><Link to="/About" onClick={toggleDrawer}>About</Link></li>
                    <li><Link to="/event" onClick={toggleDrawer}>Event</Link></li>
                    <li><Link to="/ContactUs" onClick={toggleDrawer}>Contact Us</Link></li>
                    <li>
                        <h5 className="animal">Animal</h5>
                        <div className='dropdown'>
                            <ul className='drpdwn'>
                                <li><Link to="/exchange" onClick={toggleDrawer}>Exchange</Link></li>
                                <li><Link to="/NEW_BORN" onClick={toggleDrawer}>New born</Link></li>
                                <li><Link to="/Rescue" onClick={toggleDrawer}>Rescue Animals</Link></li>
                                <li><Link to="/SpecialAnimals" onClick={toggleDrawer}>Special Animals</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Desktop navigation */}
            <ul className='navSec desktop'>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
                <li>
                    <h5 className="animal">Animal</h5>
                    <div className='dropdown'>
                        <ul className='drpdwn'>
                            <li><Link to="/exchange">Exchange</Link></li>
                            <li><Link to="/NEW_BORN">New born</Link></li>
                            <li><Link to="/Rescue">Rescue Animals</Link></li>
                            <li><Link to="/SpecialAnimals">Special Animals</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
