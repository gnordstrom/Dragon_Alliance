import React, { Component } from 'react';

import './App.css';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';


import routes from '../routes.js';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <NavBar />
        {/*<LargeCarousel />
        <SlickCarousel />
        <HomeContent />*/}
        <div className="route-wrapper">
          { routes }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
