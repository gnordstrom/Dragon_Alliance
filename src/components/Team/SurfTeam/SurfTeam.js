import React, { Component } from 'react';
import axios from 'axios';

import FilterComponent from '../Shared/FilterComponent';

import './SurfTeam.css';

class SurfTeam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surfTeam: [],
            global: true,
            professional: false,
        }

        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

     handleFilterClick(){
        this.setState({
            global: !this.state.global,
            professional: !this.state.professional
        })
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/dbSurfers`)
        .then(response => {
            console.log(response.data);
            this.setState({
                surfTeam: response.data
            })
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
                    <span>KEY: {i}</span>
                </a>
            )
        })
        return (
            <div className="team-container"> 
                <FilterComponent 
                    global={this.state.global}
                    professional={this.state.professional}
                    handleFilterClick={this.handleFilterClick}
                />
                {surfList}

            </div>
        );
    }
}

export default SurfTeam;