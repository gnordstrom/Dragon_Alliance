import React from 'react';
import PropTypes from 'prop-types';

import './Logo.css';

const Logo = props => {
    return (
        <img className="logo-img" src={props.src} alt={props.alt}/>
    );
};

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};  

export default Logo;