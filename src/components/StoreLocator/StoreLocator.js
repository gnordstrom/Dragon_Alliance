import React, { Component } from 'react';

import header from './assets/jossi-header.jpg'

import './StoreLocator.css';

class StoreLocator extends Component {
    render() {
        return (
            <div>
                <div className="header-wrapper"> 
                    <img src={header} alt="Dragon"/>
                </div>
                Store Locator Component!
            </div>
        );
    }
}

export default StoreLocator;