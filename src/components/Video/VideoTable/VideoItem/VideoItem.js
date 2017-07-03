import React from 'react';
import PropTypes from 'prop-types';

import './VideoItem.css';

const VideoItem = props => {
    const url = props.url;
    return (
        <div className="box">
            <img className="box-img" src={props.image} alt="Dragon"/>
            <div className="play-container">
                <img className="play" alt="Dragon" src={props.playButton} onClick={() => props.handleVideoChange(url)}/>
            </div>
            <span className="box-text">{props.text}</span>
        </div>
    );
};

VideoItem.propTypes = {
    url: PropTypes.string,
    image: PropTypes.string,
    playButton: PropTypes.string,
    text: PropTypes.string,
};

export default VideoItem;