import React, { Component } from 'react';

import './FilterComponent.css';

class FilterComponent extends Component {
    // constructor() {
        // super();
        // this.state = {
        //     global: this.,
        //     professionals: false,
        // }

        // this.handleGlobal = this.handleGlobal.bind(this);
        // this.handlePros = this.handlePros.bind(this);
    // }

    // handleGlobal(){
    //     this.setState({
    //         global: !this.state.global,
    //         professionals: !this.state.professionals
    //     })
    // }
    // handlePros() {
    //     this.setState({
    //         global: !this.state.global,
    //         professionals: !this.state.professionals
    //     })
    // }
    render() {
        const { 
            global, 
            professional,
            handleFilterClick
        } = this.props;

        console.log("global", global)
        console.log("professional", professional)

        return (
            <div className="filter-container">
                <span className="filter">FILTER:</span>

                { (global) ? <span className="selection selected" onClick={handleFilterClick}>GLOBAL</span>
                            : <span className="selection" onClick={handleFilterClick}>GLOBAL</span> }  
                { (professional) ? <span className="selection selected" onClick={handleFilterClick}>PROS</span>
                                : <span className="selection" onClick={handleFilterClick}>PROS</span> }  
            </div>
        );
    }
}

export default FilterComponent;