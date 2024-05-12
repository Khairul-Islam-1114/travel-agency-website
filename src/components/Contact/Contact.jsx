import React from 'react';
import './Contact.css';
import contact_image from '../../assets/img/contact.jpg';

import mail from '../../assets/img/mail.svg';
import phone from '../../assets/img/phone.svg';
import location from '../../assets/img/location-indicator-red.svg';

import add from '../../assets/img/add-button.png';




const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <img src={contact_image} alt="" className='contact-image' />
            <div className="layer"></div>
            <div className="contact-image-text">
                <h1>CONTACT US</h1>
                <p>
                    No matter if you're a traveler who needs advice, an operator wanting to list their adventures,
                    or a potential new partner looking to collaborate, we're excited to hear from you!
                    Get in touch with us below or through our LiveChat.
                </p>
            </div>

            <div className="second-row">
                <h3>LET'S TALK WITH US</h3>
                <div className="contact-us">
                    <div className="call">
                        <img src={phone} alt="" className='phone icon' />
                        <div>
                            <h4>CALL US</h4>
                            <a href="tel:+880 9614 500500">+880 9614 500500</a>
                            <a href="tel:+880 1713 398853">+880 1713 398853</a>
                        </div>
                    </div>
                    <div className="mail">
                        <img src={mail} alt="" className='mail-icon' />
                        <div>
                            <h4>MAIL US</h4>
                            <a href="mailto:info@populartravel.com.bd">info@populartravel.com.bd</a>
                        </div>
                    </div>
                    <div className="address">
                        <img src={location} alt="" className='location icon' />
                        <div>
                            <h4>COME TO US</h4>
                            <p>Ka #85/3, 1st Floor Shahjadpur, Gulshan, Dhaka</p>
                        </div>
                    </div>
                </div>

                <h3 className='FAQ'>FREQUENTLY ASKED QUESTIONS</h3>
                <div className="ask-form">
                    <div className="ask-questions">
                        <div>
                            <img src={add} alt="" className='add-icon' />
                            <p>How to pay an online travel reservation?</p>
                        </div>
                        <div>
                            <img src={add} alt="" className='add-icon' />
                            <p>How to became a VIP customer?</p>
                        </div>
                        <div>
                            <img src={add} alt="" className='add-icon' />
                            <p>Which currency do you accept?</p>
                        </div>
                        <div>
                            <img src={add} alt="" className='add-icon' />
                            <p>How can you became your external partner?</p>
                        </div>
                        <div>
                            <img src={add} alt="" className='add-icon' />
                            <p>How can you get to work in your business?</p>
                        </div>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" id='name' name='full-name' required  placeholder='Enter name here...'/>
                        </div>

                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id='email' name='email-address' required  placeholder='Enter email here...'/>
                        </div>

                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea name="asked-question" id="message" required placeholder='Ask questions...'></textarea>
                        </div>

                        <div className='form-bottom'>
                            <div className='agent-customer'>
                                <div>
                                    <label htmlFor="agent">
                                        <input type="radio" name="agent-customer" id="agent"/>
                                        Agent
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="customer">
                                        <input type="radio" name="agent-customer" id="customer"/>
                                        Customer
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact