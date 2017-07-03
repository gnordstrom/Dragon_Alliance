import React, { Component } from 'react';

// Components
import VideoItem from './VideoItem/VideoItem';

import img1 from './VideoItem/assets/video1.jpg';

// Imported images for video cards
import playButton from './assets/dragon-tv-play.png';
import surf0 from './assets/surf/0.jpg'
import surf1 from './assets/surf/1.jpg'
import surf2 from './assets/surf/2.jpg'
import surf3 from './assets/surf/3.jpg'
import snow0 from './assets/snow/0.jpg'
import snow1 from './assets/snow/1.jpg'
import snow2 from './assets/snow/2.jpg'
import snow3 from './assets/snow/3.jpg'
import snow4 from './assets/snow/4.jpg'
import moto0 from './assets/moto/0.jpg'
import optical0 from './assets/optical/0.jpg'
import optical1 from './assets/optical/1.jpg'
import optical2 from './assets/optical/2.jpg'

import './VideoTable.css';

class VideoTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surf: [
                'https://player.vimeo.com/video/147396624',
                'https://player.vimeo.com/video/156900260',
                'https://player.vimeo.com/video/179814673',
                'https://player.vimeo.com/video/175451291',
            ],
            snow: [
                'https://player.vimeo.com/video/183036840',
                'https://player.vimeo.com/video/191883987',
                'https://player.vimeo.com/video/132362601',
                'https://player.vimeo.com/video/132361644',
                'https://player.vimeo.com/video/132352266',
            ],
            moto: [
                'https://player.vimeo.com/video/138690647',
            ],
            optical: [
                'https://player.vimeo.com/video/164330889',
                'https://player.vimeo.com/video/144926235',
                'https://player.vimeo.com/video/120840882',
            ]
        }
    }
    render() {
        const {
            surf, 
            snow, 
            moto, 
            optical 
        } = this.state;
        return (
            <div className="table-wrapper">
                <div className="container">
                    <div className="column-a">
                        <div className="column-header">
                            SURF
                        </div>
                        <VideoItem 
                            text="DRAGON'S H20 FLOATABLE COLLECTION"
                            image={surf0}
                            handleVideoChange={this.props.handleVideoChange}
                            url={surf[0]}
                        />
                        <VideoItem 
                            text="DETAIL COLLECTION - YOUTH DRIVEN STYLING"
                            image={surf1}
                            handleVideoChange={this.props.handleVideoChange}
                            url={surf[1]}
                        />
                        <VideoItem 
                            text="RISING STAR, GRIFFIN COLAPINTO"
                            image={surf2}
                            handleVideoChange={this.props.handleVideoChange}
                            url={surf[2]}
                        />
                        <VideoItem 
                            text="CLARK LITTLE SIGNATURE VANTAGE"
                            image={surf3}
                            handleVideoChange={this.props.handleVideoChange}
                            url={surf[2]}
                        />
                    </div>

                    <div className="column-b">
                        <div className="column-header">
                            SNOW
                        </div>
                        <VideoItem 
                            text="LUMALENS"
                            image={snow0}
                            handleVideoChange={this.props.handleVideoChange}
                            url={snow[0]}
                        />
                        <VideoItem 
                            text="DRAGON'S TRANSITION LENS"
                            image={snow1}
                            handleVideoChange={this.props.handleVideoChange}
                            url={snow[1]}
                        />
                        <VideoItem 
                            text="SWIFTLOCK LENS TECHNOLOGY"
                            image={snow2}
                            handleVideoChange={this.props.handleVideoChange}
                            url={snow[2]}
                        />
                        <VideoItem 
                            text="NEW NFX2 GOGGLE - SKI"
                            image={snow3}
                            handleVideoChange={this.props.handleVideoChange}
                            url={snow[3]}
                        />
                        <VideoItem 
                            text="NEW NFX2 GOGGLE - SNOWBOARD"
                            image={snow4}
                            handleVideoChange={this.props.handleVideoChange}
                            url={snow[4]}
                        />
                    </div>

                    <div className="column-c">
                        <div className="column-header">
                            MOTO
                        </div>
                        <VideoItem 
                            text="NFX2 MX GOGGLE SWIFTLOCK TECHNOLOGY"
                            image={moto0}
                            handleVideoChange={this.props.handleVideoChange}
                            url={moto[0]}
                        />
                    </div>

                    <div className="column-d">
                        <div className="column-header">
                            OPTICAL
                        </div>
                        <VideoItem 
                            text="THE DESTINY COLLECTION"
                            image={optical0}
                            handleVideoChange={this.props.handleVideoChange}
                            url={optical[0]}
                        />
                        <VideoItem 
                            text="EVAN GEISELMAN - FRAME OF MIND"
                            image={optical1}
                            handleVideoChange={this.props.handleVideoChange}
                            url={optical[1]}
                        />
                        <VideoItem 
                            text="CLARK LITTLE - FRAME OF MIND"
                            image={optical2}
                            handleVideoChange={this.props.handleVideoChange}
                            url={optical[2]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoTable;