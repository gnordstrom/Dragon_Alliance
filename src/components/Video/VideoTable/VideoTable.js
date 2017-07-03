import React, { Component } from 'react';

import VideoItem from './VideoItem/VideoItem';
import playButton from './assets/dragon-tv-play.png';

import video1 from './VideoItem/assets/video1.jpg';

import './VideoTable.css';

class VideoTable extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         currentVideo: this.props.currentVideo
    //     }
    // }
    render() {
        return (
            <div className="table-wrapper">
                <div className="container">
                    <div className="column-a">
                        <div className="column-header">
                            SURF
                        </div>
                        <VideoItem 
                            playButton={playButton}
                            text="DRAGON'S H20 FLOATABLE COLLECTION"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                        <VideoItem 
                            playButton={playButton}
                            text="LUMALENS"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                        <VideoItem 
                            playButton={playButton}
                            text="NFX2 MX GOGGLE - SWIFTLOCK TECHNOLOGY"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                    </div>
                    <div className="column-b">
                        <div className="column-header">
                            SNOW
                        </div>
                        <VideoItem 
                            playButton={playButton}
                            text="2"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                        <VideoItem 
                            playButton={playButton}
                            text="DETAIL COLLECTION - YOUTH DRIVENS TYLING"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                    </div>
                    <div className="column-c">
                        <div className="column-header">
                            MOTO
                        </div>
                        <VideoItem 
                            playButton={playButton}
                            text="3"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                        <VideoItem 
                            playButton={playButton}
                            text="DETAIL COLLECTION - YOUTH DRIVENS TYLING"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                    </div>
                    <div className="column-d">
                        <div className="column-header">
                            OPTICAL
                        </div>
                        <VideoItem 
                            playButton={playButton}
                            text="4"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                        <VideoItem 
                            playButton={playButton}
                            text="DETAIL COLLECTION - YOUTH DRIVENS TYLING"
                            image={video1}
                            handleVideoChange={this.props.handleVideoChange}
                            url="https://player.vimeo.com/video/156900260"
                        />
                    </div>
                    {/*<div className="box">
                        <img className="box-img" src="https://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/dragon h20 floatable thumb.jpg" />
                        <div className="play-container">
                            <img className="play" src={playButton} />
                        </div>
                        <span>DRAGON'S H20 FLOATABLE COLLECTION</span>
                    </div>*/}
                    {/*<div className="box"></div>*/}
                    {/*<div className="box"></div>
                    <div className="box"></div>

                    <div className="box"></div>*/}
                    {/*<div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>*/}
  
                </div>
            </div>
        );
    }
}

export default VideoTable;