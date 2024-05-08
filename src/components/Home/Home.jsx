import React from 'react';
import './Home.css';

import videoBackground from '../../assets/img/hero-video.mp4'

const Home = () => {
  return (
    <section className='home-section' id='home'>
      <video autoPlay loop muted className='video-background'>
        <source src={videoBackground} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <h1>T R A V E L L I N G - MEMORY FOR A LIFETIME</h1>

        <h2><span>Dhaka Popular Travel</span> <br /> is Here For You to Bring Those Memory Into Your Life</h2> 
        <h3>By Offering Unbeatable Flight Ticket Priceing And Top-Notch Customer Care</h3>
      </div>
    </section>
  )
}

export default Home;