import React, { Component } from 'react';

import header from './assets/slim_fom_mick.jpg';
import './Products.css';

class Products extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <img src={header} alt="Dragon"/>
                Product Component
            </div>
        );
    }
}

export default Products;