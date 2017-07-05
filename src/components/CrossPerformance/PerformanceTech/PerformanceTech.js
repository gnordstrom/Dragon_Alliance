import React from 'react';
// import PropTypes from 'prop-types';

import './PerformanceTech.css';

import predatorLogo from './assets/performance_lens_technology.svg';

const PerformanceTech = props => {
    return (
        <div className="predator-container">
            <div className="predator-wrapper">
                <img className="predator-logo" src={predatorLogo} alt="Predator Performance"/>
            </div>
            <div className="predator-wrapper predator-content">
                Performance Lens Technology works hard so that consumers can fully immerse themselves in the moment, allowing instinct and passion to lead to clearer and more vivid outdoor experiences. They not only provide maximum protection from sun UV, but also corrosional elements such as salt water, sun block, fish guts, and equipment impact.
            </div>
        </div>
    );
};

// PerformanceTech.propTypes = {
    
// };

export default PerformanceTech;