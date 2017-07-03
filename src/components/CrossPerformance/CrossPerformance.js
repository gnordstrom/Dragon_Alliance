import React, { Component } from 'react';

import './CrossPerformance.css';

class CrossPerformance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: false
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                CrossPerformance Component!
            </div>
        );
    }
}

export default CrossPerformance;