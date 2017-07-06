import React, { Component } from 'react';

import ContentOne from './ContentOne/ContentOne';
import ContentTwo from './ContentTwo/ContentTwo';
import GlassesTable from './GlassesTable/GlassesTable';

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

export default AdaptiveTech;