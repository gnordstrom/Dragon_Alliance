import React, { Component } from 'react';

import './FilterComponent.css';

class FilterComponent extends Component {
    render() {
        return (
            <div className="filter-container">
                <span className="filter">FILTER:</span>
                <span className="selection">GLOBAL</span>
                <span className="selection">PROS</span>
            </div>
        );
    }
}

export default FilterComponent;