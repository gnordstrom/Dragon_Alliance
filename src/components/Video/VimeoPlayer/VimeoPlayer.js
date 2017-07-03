import React from 'react';
import PropTypes from 'prop-types';

const VimeoPlayer = (props) => {
    return (
        <iframe 
            src={props.src} 
            width="974" 
            height="548" 
            frameBorder="0" 
            allowFullScreen
            title="vimeo">
        </iframe>
    );
};

VimeoPlayer.defaultProps = {
    src: 'https://player.vimeo.com/video/191883987'
}

VimeoPlayer.PropTypes = {
    src: PropTypes.string
}

export default VimeoPlayer;
