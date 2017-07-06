import React, { Component } from 'react';
import axios from 'axios';

import './SurfTeam.css';

class SurfTeam extends Component {
    constructor(props) {
        super(props);

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
        const surfList = this.state.surfTeam.map( (surfer, i) => {
            return (
                <a className="team-card" key={i} href="#">
                    <span className="team-card-img">
                        <img src={surfer.thumbnailurl}></img>
                    </span>
                    <span className="team-card-title">{surfer.firstname}</span>
                </a>
            )
        })
        return (
            <div className="team-container"> 
                {surfList}
            </div>
        );
    }
}

export default SurfTeam;