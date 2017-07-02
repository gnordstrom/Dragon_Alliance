import React, { Component } from 'react';

import logo from '../../assets/Navbar/dragon-logo.svg';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-top">
                    <div className="logo">
                        <img src={logo} alt="Dragon Alliance Logo"/>
                    </div>
                    <div className="cart">
                        <div className="cart-top">
                            <div className="cart-icon"></div>
                            <span>0 ITEMS IN YOUR CART</span>
                        </div>
                        <div className="cart-bottom">
                            <h5>JOIN: </h5>
                            <div className="bottom-icon">
                                <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
                            </div>
                            <div className="bottom-icon">
                                <i className="fa fa-vimeo-square fa-lg" aria-hidden="true"></i>
                            </div>
                            <div className="bottom-icon">
                                <i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-bottom">
                    <div className="bottom-link small">
                        <h5>PRODUCT</h5>
                    </div>
                    <div className="bottom-link small">
                        <h5>VIDEO</h5>
                    </div>
                    <div className="bottom-link small">
                        <h5>TEAM</h5>
                    </div>
                    <div className="bottom-link big">
                        <h5>CROSS PERFORMANCE (XP)</h5>
                    </div>
                    <div className="bottom-link small">
                        <h5>ABOUT US</h5>
                    </div>
                    <div className="bottom-link">
                        <h5>STORE LOCATOR</h5>
                    </div>
                    <div className="bottom-link">
                        <h5>CHOOSE REGION</h5>
                    </div>
                    <div className="bottom-input">
                        <input className="input-box"type="text" placeholder="Enter your email address"/>
                        <button className="input-button">JOIN DRAGON</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;