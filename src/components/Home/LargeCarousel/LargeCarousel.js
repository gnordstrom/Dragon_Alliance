import React, { Component } from 'react';
import Slider from 'react-slick';

import img1 from '../assets/1mick.jpg';
import img2 from '../assets/2float.jpg';
import img3 from '../assets/3danny.jpg';
import img4 from '../assets/4xp.jpg';
import img5 from '../assets/5sierra.jpg';
import img6 from '../assets/6nfx2.jpg';

import './LargeCarousel.css';

class LargeCarousel extends Component {
    render() {
        let settings = {
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            initialSlide: 0,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
        }
        return (
        
            <Slider {...settings} className="large-slick">
                <div>
                    <img src={img1} alt="Dragon"/>
                </div>
                <div>
                    <img src={img2} alt="Dragon"/>
                </div>
                <div>
                    <img src={img3} alt="Dragon" />
                </div>
                <div>
                    <img src={img4} alt="Dragon" />
                </div>
                <div>
                    <img src={img5} alt="Dragon" />
                </div>
                <div>
                    <img src={img6} alt="Dragon"/>
                </div>
            </Slider>
        );
    }
}

export default LargeCarousel;