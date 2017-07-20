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
            dataLoaded: false
        }

        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.determineView = this.determineView.bind(this);
    }

     handleFilterClick(){
        this.setState({
            global: !this.state.global,
            professional: !this.state.professional
        })
    }

    componentDidMount() {
        axios.get(`/api/dbSurfers`)
        .then(response => {
            console.log(response.data);
            this.setState({
                surfTeam: response.data,
                dataLoaded: !this.state.dataLoaded
            })
        })
    }

    determineView() {
        const globalList = this.state.surfTeam.filter( surfer => surfer.level === 'Global');
        const professionalList = this.state.surfTeam.filter( surfer => surfer.level === 'Professional');
        
        if (this.state.dataLoaded) {
            if (this.state.global) {
                let globalSurfers = globalList.map( (surfer, i) => {
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
                return globalSurfers
            } else {
                let proSurfers = professionalList.map( (surfer, i) => {
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
                return proSurfers;
            }
        } else {
            return ( <p>Loading...</p>)
        }
    }

    // OAuth - The tech for authorization
    // Auto0 - A company

    render() {
        const {
            global,
            professional,
            dataLoaded,
            surfTeam
        } = this.state;

        return (
            <div className="team-container"> 
                <FilterComponent 
                    global={global}
                    professional={professional}
                    handleFilterClick={this.handleFilterClick}
                />

                {this.determineView()}

            </div>
        );
    }
}

export default SurfTeam;