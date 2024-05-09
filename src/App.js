import './App.css';

import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Destination from './components/Destination/Destination.jsx';

const App = () => {
  return (
    <Router>

      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
        <Explore />
        <Destination />
      </div>
    </Router>
  )
}

export default App
