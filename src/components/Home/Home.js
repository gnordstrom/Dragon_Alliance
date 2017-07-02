import React, { Component } from 'react';

import LargeCarousel from './LargeCarousel/LargeCarousel';
import SlickCarousel from './SlickCarousel/SlickCarousel';
import HomeContent from './HomeContent/HomeContent';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <LargeCarousel />
                <SlickCarousel />
                <HomeContent />
            </div>
        );
    }
}

export default Home;