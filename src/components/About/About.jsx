import React from 'react';
import './About.css';

import about_image from '../../assets/img/about-top-image.jpg';
import aurora_sky from '../../assets/img/aurora-sky.jpg';

import plan_tickets from '../../assets/img/plane-tickets.png';
import best_price from '../../assets/img/best-price.png';
import networks from '../../assets/img/network.png';
import support from '../../assets/img/support.png';






const whyChooseUs = [
    {
        logo: plan_tickets,
        title: 'Ticketing Expertise',
        description: 'Our team of professionals has years of expertise in the travel sector and is knowledgeable about the intricacies of purchasing an airline ticket. To make sure you get the finest offers and possibilities, we stay up-to-date with the most recent market trends and innovations.',
    },
    {
        logo: best_price,
        title: 'Competitive Price',
        description: 'We believe that Travel should be affordable for anyone, which is why we strive to provide the most affordable prices in the market without compromising on quality. To make sure you get the best deals possible, our team constantly tracks fare trends.',
    },
    {
        logo: networks,
        title: 'Extensive Networks',
        description: "The capacity of our company to offer a wide range of destinations and flexible flight schedules is made possible by the strong working relationships we have built with airlines all over the world. We have you covered whether you're travelling for work or leisure.",
    },
    {
        logo: support,
        title: 'Customized Service',
        description: "We understand that each traveller has individual needs and preferences. Our experienced customer service team is here to hear about your problems and offer personalized solutions. We're here to help with your unique and specific demands.",
    },
]

const About = () => {
    return (
        <section className='about-section' id='about'>
            <img src={about_image} alt="" className='about-top-img' />
            <div className="layer"></div>
            <div className='about-text'>
                <h1>ABOUT US</h1>
                <h2>Dhaka Popular Travel is Bangladesh's
                    leading travel agency committed to
                    the mission of creating happy travellers.
                </h2>
            </div>

            <div className="about-mission-video">
                <div className="about-mission">
                    <div className="about-us">
                        <h2>ABOUT US</h2>
                        <p>Welcome to Dhaka Popular Travel, your gateway to seamless air travel experiences. At Dhaka Popular Travel, we believe that every journey should begin with ease, convenience, and affordability. Our company was started with a passion for making air travel simple and has quickly expanded to become a reliable partner for travelers all around the world.</p>
                    </div>

                    <div className="our-mission">
                        <h2>OUR MISSION</h2>
                        <p>Our objective is to simplify the process of purchasing airline tickets, ensuring a hassle-free booking experience for all. We are dedicated to offering a wide range of options and individualized | customized services to each traveler’s unique requirements.</p>
                    </div>
                </div>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/dACqlX6aBPs?si=vTRwIHtH1SDVDuM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="choose-header">
                <h2>WHY YOU CHOOSE US?</h2>
            </div>
            <div className="why-choose-us">
                <img src={aurora_sky} alt="buildings as high as cloud" />


                <div className="card-wrapper">
                    {whyChooseUs.map((reason, index) => {
                        return (
                            <div className="choose-card" key={index}>
                                <img src={reason.logo} alt="" className='choose-logo' />
                                <div className="choose-content">
                                    <h3>{reason.title}</h3>
                                    <p>{reason.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </section>
    );
}

export default About;
