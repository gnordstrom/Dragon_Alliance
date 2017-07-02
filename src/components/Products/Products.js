import React, { Component } from 'react';

import header from './assets/slim_fom_mick.jpg';
import './Products.css';

class Products extends Component {
    render() {
        return (
            <div>
                <img src={header} />
                Product Component
            </div>
        );
    }
}

export default Products;