import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

import logo from '../../assets/img/logo.png';
import home from '../../assets/img/home.svg';
import info from '../../assets/img/info-empty.svg';
import contact from '../../assets/img/contact-info.svg';




const Navbar = () => {
    return (
        <nav>
            <div className='brand'>
                <img src={logo} alt="" className="logo" />
                <span>Dhaka Popular Travel</span>
            </div>

            <ul>
                <li>
                    <Link to='/' className='nav-items'> <img src={home} alt="" /> <span>H O M E</span> </Link>
                </li>

                <li>
                    <Link to='/about' className='nav-items'> <img src={info} alt="" /> <span>A B O U T</span> </Link>
                </li>

                <li>
                    <Link to='/contact' className='nav-items'> <img src={contact} alt="" /> <span>C O N T A C T</span> </Link>
                </li>
            </ul>

            <button type="button">Booking Now</button>
        </nav>
    )
}

export default Navbar;