import React, { Component } from 'react';

import axios from 'axios';

import header from './assets/slim_fom_mick.jpg';
import './Products.css';

const url = 'http://localhost:3030/api/getSunglasses'

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sunglasses: {}
        }
    }

    componentDidMount() {
        axios.get(url).then(res => {
            console.log(res.data.sunglasses);
            this.setState({
                sunglasses: res.data.sunglasses[0]
            })
            
        })
    }
    render() {
        console.log("State", this.state.sunglasses)
        return (
            <div>
                <img src={header} alt="Dragon"/>
                <h2>Navigation Bar Here</h2>

                <p>Name: {this.state.sunglasses.name}</p>
                <p>Description: {this.state.sunglasses.description}</p>
                Specs: 
                <ul style={{'listStyle': 'initial'}}>
                    { 
                        (this.state.sunglasses.specs) 
                    ? 
                        this.state.sunglasses.specs.map(item => (<li>{item}</li>) ) 
                    : 
                        null 
                    }
                </ul>

                Styles:
                <ol>
                    { 
                        (this.state.sunglasses.styles) 
                    ? 
                        this.state.sunglasses.styles.map(style => (
                            <div style={{'border': '1px solid black', 'margin': '10px'}}>
                                Color: {style.color}
                                <img src={`${style.imageUrl}`} style={{'width': '200px'}} />
                                Price: {style.price}
                            </div>
                        )) 
                    : 
                        null 
                    }
                </ol>

            </div>
        );
    }
}

export default Products;