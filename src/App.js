import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Destination from './components/Destination/Destination.jsx';
import PlanToPay from './components/PlanToPay/PlanToPay.jsx';

import slider1 from './assets/img/ads-slider1.png';
import slider2 from './assets/img/ads-slider2.png';
import Carousel from './components/Carousel/Carousel.jsx';


const App = () => {

  const sliderItems = [

    {
      image: slider1,
      alt: 'Ads Slider 1'
    },
    {
      image: slider2,
      alt: 'Ads Slider 2'
    }
  ]
  return (
    <Router>

      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
        <Explore />
        <Destination />
        <PlanToPay />
        <Carousel items={sliderItems}/>
      </div>
    </Router>
  )
}

export default App
