import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Destination from './components/Destination/Destination.jsx';
import PlanToPay from './components/PlanToPay/PlanToPay.jsx';

import slider1 from './assets/img/ads-slider1.png';
import slider2 from './assets/img/ads-slider2.png';
import Carousel from './components/Carousel/Carousel.jsx';
import Airlines from './components/HorizontalScroll/Airlines.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';


const App = () => {

  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);


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
    <>
      {isHome &&
        <Router>

          <div className='app'>
            <Navbar setIsAbout={setIsAbout} setIsHome={setIsHome} setIsContact={setIsContact}/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              {/* <Route path='/contact' element={<Contact />} /> */}


            </Routes>
            <Explore />
            <Destination />
            <PlanToPay />
            <Carousel items={sliderItems} />
            <Airlines />
            <Footer />
          </div>
        </Router>
      }

      {isAbout &&
        <Router>

          <div className='app'>
            <Navbar setIsAbout={setIsAbout} setIsHome={setIsHome} setIsContact={setIsContact}/>
            <Routes>
              <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      }

      {isContact &&
        <Router>

          <div className='app'>
            <Navbar setIsAbout={setIsAbout} setIsHome={setIsHome} setIsContact={setIsContact}/>
            <Routes>
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </div>


        </Router>
      }

    </>

  )
}

export default App;
