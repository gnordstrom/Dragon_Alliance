import React from 'react';
import PropTypes from 'prop-types';     

import './ContentTwo.css';

const ContentTwo = () => {
    return (
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
    );
};


export default ContentTwo;