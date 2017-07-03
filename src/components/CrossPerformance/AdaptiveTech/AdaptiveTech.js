import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentOne from './ContentOne/ContentOne';
import ContentTwo from './ContentTwo/ContentTwo';
import GlassesTable from './GlassesTable/GlassesTable';

import glasses1 from './GlassesTable/assets/glasses1.jpg';
import glasses2 from './GlassesTable/assets/glasses2.jpg';
import glasses3 from './GlassesTable/assets/glasses3.jpg';
import glasses4 from './GlassesTable/assets/glasses4.jpg';

import './AdaptiveTech.css';

class AdaptiveTech extends Component {
    render() {
        return (
            <div className="adaptive-wrapper">
                <div className="adaptive-logo"></div>

                <div className="adaptive-categories">
                    <div className="categories-wrapper">
                        <div href="#" className="category glacia third"></div>
                        <div href="#" className="category terra third"></div>
                        <div href="#" className="category hydra third"></div>
                    </div>
                </div>

                <ContentOne />

                <ContentTwo />

                <GlassesTable />
            </div>
        );
    }
}

AdaptiveTech.propTypes = {

};

export default AdaptiveTech;