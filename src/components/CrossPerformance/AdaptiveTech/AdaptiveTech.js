import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

                <div className="adaptive-content1">
                    <div className="content1-header">
                        The XP Collection is unlike any other because of its Adaptive Technology.
                    </div>
                    <div className="content1-content">
                        Built into each design, Adaptive Technology provides optimal functionality with features that adapt to demanding outdoor conditions. Adaptive Technology allows consumers to customize their ultimate experience on water, land, or snow.
                    </div>
                </div>

                <div className="adaptive-content2">
                    <div className="content2-card">
                        <div className="glacia"></div>
                    </div>
                    <div className="content2-card">
                        <div className="terra"></div>
                    </div>
                    <div className="content2-card">
                        <div className="hydra"></div>
                    </div>
                </div>
            </div>
        );
    }
}

AdaptiveTech.propTypes = {

};

export default AdaptiveTech;