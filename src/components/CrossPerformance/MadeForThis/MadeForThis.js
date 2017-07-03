import React from 'react';
import PropTypes from 'prop-types';

import './MadeForThis.css';

const MadeForThis = props => {
    const { title, content1, content2 } = props;
    return (
        <div className="mft">
            <div className="mft-title">{title}</div>
            <div className="mft-content">{content1}</div>
            <div className="mft-content">{content2}</div>
        </div>
    );
};

MadeForThis.propTypes = {
    title: PropTypes.string.isRequired,
    content1: PropTypes.string,
    content2: PropTypes.string,
};

export default MadeForThis;