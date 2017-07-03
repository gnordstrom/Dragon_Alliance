import React, { Component } from 'react';

import VideoTable from './VideoTable/VideoTable';
import VimeoPlayer from './VimeoPlayer/VimeoPlayer';

import './Video.css';

class Video extends Component {
    constructor() {
        super();

        this.state = {
            currentVideo: 'https://player.vimeo.com/video/191883987'
        }

        this.handleVideoChange = this.handleVideoChange.bind(this);
    }

// https://player.vimeo.com/video/156900260
    handleVideoChange(term) {
        this.setState({
            currentVideo: term
        })
    }
    render() {
        return (
            <div>
                <VimeoPlayer src={this.state.currentVideo}/>
                <VideoTable handleVideoChange={this.handleVideoChange} currentVideo={this.state.currentVideo}/>
            </div>
        );
    }
}

export default Video;