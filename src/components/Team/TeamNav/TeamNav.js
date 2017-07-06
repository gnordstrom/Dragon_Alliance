import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './TeamNav.css';

class TeamNav extends Component {
    render() {
        return (
            <div className="teamnav-container">
                <Link to="/team/surf" className="">SURF</Link>
                <Link to="/team/snow" className="">SNOWBOARD</Link>
                <Link to="/team/free-ski" className="">FREE SKI</Link>
                <Link to="/team/moto" className="">MOTO</Link>
                <Link to="/team/wake" className="">WAKE</Link>
                <Link to="/team/lifestyle" className="">LIFESTYLE</Link>
            </div>
        );
    }
}

export default TeamNav;