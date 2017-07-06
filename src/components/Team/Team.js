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
        axios.get(`http://localhost:3030/api/getSurfTeam`)
        .then(response => {
            this.setState({
                surfTeam: response.data.surfTeam
            })
            console.log(this.state.surfTeam)
        })
    }
    render() {
        const surfTeam = this.state.surfTeam.map( member => {
            return (
                <div>
                    <h2>Name: </h2> <span> {member.name}</span>
                    <h2>Description: </h2> <span> {member.description}</span>
                </div>
            )
        })
        return (
            <div>
                <img src={team} alt="Dragon's Team"/>
                {/*Team Component*/}
                {/*{(this.state.surfTeam[0]) ?this.state.surfTeam[0].name : null}*/}

                {/*{ surfTeam }*/}
                Team Component

                <TeamNav />
                
            </div>
        );
    }
}

export default Team;