import React, { Component } from 'react';

import './HomeContent.css';

import glasses from './assets/featured_glass.jpg';
import goggle from './assets/featured_goggle.jpg';

class HomeContent extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="content-box">
                    <div className="content-box-header">Featured Sunglasses</div>
                    <img src={glasses} alt="Featured Glasses"/>
                </div>
                <div className="content-box">
                    <div className="content-box-header">Featured Video</div>
                    <iframe className="content-iframe" src="//player.vimeo.com/video/217927548?byline=0&portrait=0&title=0" title="vimeo" width="500" height="281" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div className="content-box">
                    <div className="content-box-header">Featured Goggle</div>
                    <img src={goggle} alt="Featured Goggles"/>
                </div>
            </div>
        );
    }
}

export default HomeContent;