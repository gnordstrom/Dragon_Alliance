import React, { Component } from 'react';

import team from './assets/ace-header.jpg';
import './Team.css';

class Team extends Component {
    render() {
        return (
            <div>
                <img src={team} alt="Dragon's Team"/>
                Team Component
            </div>
        );
    }
}

export default Team;