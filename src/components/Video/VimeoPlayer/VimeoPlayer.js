import React from 'react';

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

export default VimeoPlayer;