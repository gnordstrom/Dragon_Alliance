import React, { Component } from 'react';

import Logo from './Logo/Logo';
import AboutDragon from './AboutDragon/AboutDragon';

import header from './assets/header.jpg';
import logo from './assets/dragon-logo.png';

import './AboutUs.css';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <div className="header-wrapper">
                    <img src={header} alt="About Us" />
                </div>
                <div className="logo-wrapper">
                    <Logo src={logo} alt="Dragon Logo"/>
                </div>
                <AboutDragon />
            </div>
        );
    }
}

export default AboutUs;