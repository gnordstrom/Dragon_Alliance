import React, { Component } from 'react';
import axios from 'axios';

import team from './assets/ace-header.jpg';

import getSurfTeam from '../../api/surfteam.js';

// Components
import TeamNav from './TeamNav/TeamNav';

import './Team.css';

class Team extends Component {
    constructor() {
        super();

        this.state = {
            surfTeam: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/api/dbSurfers`)
        .then(response => {
            console.log("The response data",response.data);
            this.setState({
                surfTeam: response.data
            })
            console.log("After request",this.state.surfTeam)
        })
    }
    render() {
        const surfTeam = this.state.surfTeam.map( member => {
            let images = member.images.map( image => {
                return (
                    <li>
                        <img src={image} />
                    </li>
                )
            })
            return (
                <div>
                    <h2>Name: </h2> <span> {member.firstname}</span>
                    <h2>Description: </h2> <span> {member.description}</span>
                    <ul>
                        { images }
                    </ul>

                </div>
            )
        })
        return (
            <div>
                <img src={team} alt="Dragon's Team"/>
  
                { surfTeam }

                
                Team Component below

                <TeamNav />
                
            </div>
        );
    }
}

export default Team;