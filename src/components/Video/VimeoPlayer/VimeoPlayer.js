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

// Purpose of defaultProps unnecessary with use of isRequired in propTypes

// VimeoPlayer.defaultProps = {
//     src: 'https://player.vimeo.com/video/191883987'
// }

VimeoPlayer.propTypes = {
    src: PropTypes.string.isRequired
}

export default VimeoPlayer;
