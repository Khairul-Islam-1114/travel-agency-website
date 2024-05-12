import React from 'react';
import './Footer.css';

import logo from '../../assets/img/logo.png';

import facebook from '../../assets/img/facebook-round.svg';
import messenger from '../../assets/img/messenger.png';
import whatsapp from '../../assets/img/whatsapp.svg';

import phone from '../../assets/img/phone.svg';
import mail from '../../assets/img/mail.svg';
import location from '../../assets/img/location-indicator-red.svg';


import mastercard from '../../assets/img/mastercard.svg';
import visa from '../../assets/img/visa.svg';
import americanEx from '../../assets/img/amex.svg';
import nogod from '../../assets/img/Nagad-Horizontal-Logo.wine.svg';
import bikash from '../../assets/img/BKash-bKash2-Logo.wine.svg';

import amadeus from '../../assets/img/Amadeus-Logo.png';
import iata from '../../assets/img/iata.svg';







const Footer = () => {
    return (
        <footer id='footer'>

            <div className="upper-row">

                <div className="column-1">
                    <div className="column-1-brand">
                        <img src={logo} alt="company-logo" className='company-logo' />
                        <h4>Dhaka Popular Travel</h4>
                    </div>

                    <p>
                        Dhaka Popular Travel, in the heart of Dhaka centre since 2021, provides first rate personalized services to all our clients and after years of steadfast service, we are still committed to exceeding your expectations!
                    </p>

                    <div className="social-partner">
                        <div className="social-icons">
                            <h4>FOLLOW US</h4>
                            <img src={facebook} alt="" className="facebook" />
                            <img src={messenger} alt="" className="messenger" />
                            <img src={whatsapp} alt="" className="whatsapp" />
                        </div>

                        <div className='partner'>
                            <h4>TECHNOLOGY PARTNER</h4>
                            <img src={amadeus} alt="amadeus-logo" className='amadeus-logo' />
                        </div>
                    </div>

                </div>


                <div className="column-2">
                    <div className="sub-col-1">
                        <h4>TERMS & CONDITIONS</h4>
                        <a href="#">Cookies Policy</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>

                    </div>
                    <div className="sub-col-2">
                        <h4>CONTACT US</h4>
                        <a href="tel:+880 9614 500500" className='phone'>
                            <img src={phone} alt="phone-icon" className='phone-icon' />
                            <span>+880 9614 500500</span>
                        </a>

                        <a href="mailto:info@populartravel.com.bd" className='mail'>
                            <img src={mail} alt="email-icon" className='email-icon' />
                            <span>info@populartravel.com.bd</span>
                        </a>

                        <div>
                            <img src={location} alt="location-icon" className='location-icon' />
                            <address>Ka #85/3, 1st Floor Shahjadpur, Gulshan, Dhaka</address>
                        </div>
                    </div>
                    <div className="sub-col-3">
                        <h4>WE ACCEPT</h4>
                        <div className="payment-icons">
                            <img src={mastercard} alt="mastercard" />
                            <img src={visa} alt="visa" />
                            <img src={americanEx} alt="american-express" />
                            <img src={nogod} alt="Nagad" />
                            <img src={bikash} alt="Bikash" />
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            <div className="bottom-row">
                <img src={iata} alt="iata-logo" className='iata-logo' />
                <p>&copy; 2024 Dhaka Popular Travel</p>
            </div>




        </footer>
    )
}

export default Footer