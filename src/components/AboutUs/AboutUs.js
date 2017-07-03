import React, { Component } from 'react';

import header from './assets/header.jpg';
import './AboutUs.css';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <img src={header} alt="About Us" />
                About Us Component
            </div>
        );
    }
}

export default AboutUs;