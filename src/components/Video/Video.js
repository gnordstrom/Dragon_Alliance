import React, { Component } from 'react';
// Components
import VideoTable from './VideoTable/VideoTable';
import VimeoPlayer from './VimeoPlayer/VimeoPlayer';
// Stylesheet - use scss
import './Video.css';

class Video extends Component {
    constructor() {
        super();

        this.state = {
            currentVideo: 'https://player.vimeo.com/video/191883987'
        }

        this.handleVideoChange = this.handleVideoChange.bind(this);
    }
    // Updates state with selected video, sends to VimeoPlayer
    handleVideoChange(term) {
        this.setState({
            currentVideo: term
        })
    }
    render() {
        return (
            <div className="video-wrapper">
                <VimeoPlayer src={this.state.currentVideo}/>
                <VideoTable handleVideoChange={this.handleVideoChange} currentVideo={this.state.currentVideo}/>
            </div>
        );
    }
}

export default Video;