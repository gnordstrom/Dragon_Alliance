import React from 'react';
import PropTypes from 'prop-types';

import glasses1 from './assets/glasses1.jpg';
import glasses2 from './assets/glasses2.jpg';
import glasses3 from './assets/glasses3.jpg';
import glasses4 from './assets/glasses4.jpg';

import './GlassesTable.css';

const GlassesTable = props => {
    return (
        <div className="adaptive-glasses">
            <div className="glasses-row">
                <div className="glasses-item">
                    <div className="glasses-item-wrapper">
                        <div className="item-image-wrapper">
                            <img src={glasses1} className="item-image-image"/>
                        </div>
                        <div className="item-content">
                            <span className="item-content-logo-hydra"></span>
                            <span className="item-content-content">HYDRA - </span> 
                            <p className="item-bottom-title">SEAFARERX</p>
                        </div>
                    </div>
                </div>

                <div className="glasses-item">
                    <div className="glasses-item-wrapper">
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
            </div>

            <hr />

            <div className="glasses-row">
                <div className="glasses-item">
                    <div className="glasses-item-wrapper">
                        <div className="item-image-wrapper">
                            <img src={glasses3} className="item-image-image"/>
                        </div>
                        <div className="item-content">
                            <span className="item-content-logo-terra"></span>
                            <span className="item-content-content">TERRA - </span> 
                            <p className="item-bottom-title">ENDUROX</p>
                        </div>
                    </div>
                </div>

                <div className="glasses-item">
                    <div className="glasses-item-wrapper">
                        <div className="item-image-wrapper">
                            <img src={glasses4} className="item-image-image"/>
                        </div>
                        <div className="item-content">
                            <span className="item-content-logo-glacia"></span>
                            <span className="item-content-content">GLACIA - </span> 
                            <p className="item-bottom-title">MOUNTAINEERX</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

GlassesTable.propTypes = {
    
};

export default GlassesTable;