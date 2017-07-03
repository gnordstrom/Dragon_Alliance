import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentOne from './ContentOne/ContentOne';
import ContentTwo from './ContentTwo/ContentTwo';

import glasses1 from './GlassesTable/assets/glasses1.jpg';
import glasses2 from './GlassesTable/assets/glasses2.jpg';
import glasses3 from './GlassesTable/assets/glasses3.jpg';
import glasses4 from './GlassesTable/assets/glasses4.jpg';

import './AdaptiveTech.css';

class AdaptiveTech extends Component {
    render() {
        return (
            <div className="adaptive-wrapper">
                <div className="adaptive-logo"></div>

                <div className="adaptive-categories">
                    <div className="categories-wrapper">
                        <div href="#" className="category glacia third"></div>
                        <div href="#" className="category terra third"></div>
                        <div href="#" className="category hydra third"></div>
                    </div>
                </div>

                <ContentOne />

                <ContentTwo />

                <div className="adaptive-glasses">
                    <div className="glasses-row">
                        <div className="glasses-item left">
                            <div className="item-image-wrapper">
                                <img src={glasses1} className="item-image-image"/>
                            </div>
                            <div className="item-content">
                                <span className="item-content-logo-hydra"></span>
                                <span className="item-content-content">HYDRA - </span> 
                                <p className="item-bottom-title">SEAFARERX</p>
                            </div>
                        </div>

                        <div className="glasses-item">
                            <div className="item-image-wrapper">
                                <img src={glasses2} className="item-image-image"/>
                            </div>
                            <div className="item-content">
                                <span className="item-content-logo-hydra"></span>
                                <span className="item-content-content">HYDRA - </span> 
                                <p className="item-bottom-title">WATERMANX</p>

                            </div>
                        </div>
                    </div>


                    <div className="glasses-row">

                    </div>
                </div>
            </div>
        );
    }
}

AdaptiveTech.propTypes = {

};

export default AdaptiveTech;