import React, { Component } from 'react';
import Slider from 'react-slick';

// import leftArrow from '../../../assets/Home/arrow_slider_left2.png';

import slide1 from './assets/nfx2.jpg';
import slide2 from './assets/yellowglasses.jpg';
import slide3 from './assets/cross_performance.jpg';
import slide4 from './assets/danny.jpg';
import slide5 from './assets/float.jpg';
import slide6 from './assets/mick.jpg';

import './SlickCarousel.css';

class SlickCarousel extends Component {
    render() {
        let settings = {
            // dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            // centerMode: true,
            initialSlide: 1,
            slidesToShow: 3,
            // slidesToScroll: 1,
            arrows: false,
            focusOnSelect: true
        };
        return (
            <Slider {...settings} className="slick-container">
                <div className="image-box">
                    <img className="image-box-img" src={slide1} alt="NFX2 Anderson"/>
                </div>
                <div className="image-box">
                    <img className="image-box-img" src={slide2} alt="RX Sierra"/>
                </div>
                <div className="image-box">
                    <img className="image-box-img" src={slide3} alt="Cross Performance"/>
                </div>
                <div className="image-box">
                    <img className="image-box-img" src={slide4} alt="Danny Davis"/>
                </div>
                <div className="image-box">
                    <img className="image-box-img" src={slide5} alt="The Float"/>
                </div>
                <div className="image-box">
                    <img className="image-box-img" src={slide6} alt="Mick Fanning"/>
                </div>
            </Slider>
        );
    }
}


export default SlickCarousel;