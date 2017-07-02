import React, { Component } from 'react';

import './App.css';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LargeCarousel from './Home/LargeCarousel/LargeCarousel';
import SlickCarousel from './Home/SlickCarousel/SlickCarousel';
import HomeContent from './Home/HomeContent/HomeContent';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <NavBar />
        <LargeCarousel />
        <SlickCarousel />
        <HomeContent />
        <Footer />
      </div>
    );
  }
}

export default App;
