import React, { Component } from 'react';

import bg from './assets/intro-background.jpg';
import xpLogo from './assets/xp_cross_performance_collection-white.svg';
import XPNavigation from '../Shared/XPNavigation/XPNavigation';
import Footer from '../Shared/Footer/Footer';

import './CrossPerformance.css';

class CrossPerformance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: this.props.newNav
        } 
    }

    render() {
        return (
            <div className="cross-performance">
                <div className="parallax-mirror">
                    <div className="image-wrap">
                        <div alt="Dragon" className="parallax-slider" src={bg}></div>
                    </div>
                </div>
                <div className="header">
                    <div className="xp-logo"></div>
                </div>

                <div className="mft">
                    <div className="mft-title">MADE FOR THIS.</div>
                    <div className="mft-content">
                        We are made for this. Made for exploration, adventure and discovery. We are driven to find new places, achieve personal bests and experience life-changing moments through our ability to innovate. We are made to create tools that help us adapt to and master our surroundings.
                    </div>
                    <div className="mft-content">
                        The Dragon XP collection with Adaptive Technology is made for this too. Made as your tool to bring unrivaled color and unsurpassed clarity to all of your life’s defining moments. Made so you can discover and adapt to the world through unmatched, purpose-built clarity.
                    </div>
                </div>

                <div className="video-container">
                    <iframe className="vim-player" src="https://player.vimeo.com/video/131584887" frameBorder="0" allowFullScreen></iframe>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CrossPerformance;