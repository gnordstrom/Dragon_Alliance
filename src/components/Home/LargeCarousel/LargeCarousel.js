import React, { Component } from 'react';

import image from '../../../assets/Home/large_lumalens_danny.jpg'

class LargeCarousel extends Component {
    render() {
        return (
            <div>
                <img src={image} alt="Dragon"/>
            </div>
        );
    }
}

export default LargeCarousel;