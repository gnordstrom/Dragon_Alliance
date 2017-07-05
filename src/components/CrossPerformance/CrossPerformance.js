import React, { Component } from 'react';

import bg from './assets/intro-background.jpg';
// import xpLogo from './assets/xp_cross_performance_collection-white.svg';
// import XPNavigation from '../Shared/XPNavigation/XPNavigation';

import Parallax from './Parallax/Parallax';
import MadeForThis from './MadeForThis/MadeForThis';
import AdaptiveTech from './AdaptiveTech/AdaptiveTech';
import PerformanceTech from './PerformanceTech/PerformanceTech';
import CasesXP from './CasesXP/CasesXP';
import ShopButton from './ShopButton/ShopButton';
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
                <Parallax bg={bg}/>

                <MadeForThis 
                    title="MADE FOR THIS."
                    content1="We are made for this. Made for exploration, adventure and discovery. We are driven to find new places, achieve personal bests and experience life-changing moments through our ability to innovate. We are made to create tools that help us adapt to and master our surroundings."
                    content2="The Dragon XP collection with Adaptive Technology is made for this too. Made as your tool to bring unrivaled color and unsurpassed clarity to all of your life’s defining moments. Made so you can discover and adapt to the world through unmatched, purpose-built clarity."
                />

                <div className="video-container">
                    <iframe title="Dragon" className="vim-player" src="https://player.vimeo.com/video/131584887?title=0&byline=0&portrait=0&badge=0" frameBorder="0" allowFullScreen></iframe>
                </div>

                <AdaptiveTech />
                
                <PerformanceTech />
                <CasesXP />

                <ShopButton />
                <Footer />
            </div>
        );
    }
}

export default CrossPerformance;