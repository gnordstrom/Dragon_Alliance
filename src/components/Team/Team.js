import React, { Component } from 'react';

import teamHeader from './assets/ace-header.jpg';

// import getSurfTeam from '../../api/surfteam.js';
// Components
import TeamNav from './TeamNav/TeamNav';
import FilterComponent from './Shared/FilterComponent';

import './Team.css';

class Team extends Component {
    render() {

        return (
            <div>
                <img src={teamHeader} alt="Dragon's Team"/>
  
                <TeamNav />

                {/*<FilterComponent />              */}
            </div>
        );
    }
}

export default Team;