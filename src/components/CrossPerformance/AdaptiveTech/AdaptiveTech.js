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
                        <div className="card glacia"></div>
                        <div className="card-content">
                            On snow, the MountaineerX is built to adapt with an interchangeable C-Temple to secure fit, leather side sun shields to reduce glare, and a Rope Lanyard system that reduces the risk of loss.
                        </div>
                    </div>
                    <div className="content2-card">
                        <div className="card terra"></div>
                        <div className="card-content">
                            On land, the EnduroX is built to adapt with fully adjustable temples and nosebridge, Transitions® lenses that filter light as users move from bright sun to shade. An extra set of clear lenses for night/low light activities are included.
                        </div>
                    </div>
                    <div className="content2-card">
                        <div className="card hydra"></div>
                        <div className="card-content">
                            On water, the WatermanX and SeafarerX are built to adapt with an integrated Aqua Leash system which secures fit and floatable frames reducing the risk of loss.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AdaptiveTech.propTypes = {

};

export default AdaptiveTech;