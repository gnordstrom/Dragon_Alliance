import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Navbar/dragon-logo.svg';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-top">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Dragon Alliance Logo"/>
                        </Link>
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
                    <div className="bottom-left">
                        <div className="bottom-link small">
                            <Link to="/products" className="link-title">
                                <h5>PRODUCTS</h5>
                            </Link>
                        </div>
                        <div className="bottom-link small">
                            <Link to="/video" className="link-title">
                                <h5>VIDEO</h5>
                            </Link>
                        </div>
                        <div className="bottom-link small">
                            <Link to="/team" className="link-title">
                                <h5>TEAM</h5>
                            </Link>
                        </div>
                        <div className="bottom-link big">
                            <Link to="/cross-performance" className="link-title">
                                <h5>CROSS PERFORMANCE (XP)</h5>
                            </Link>
                        </div>
                        <div className="bottom-link medium">
                            <Link to="/about-us" className="link-title">
                                <h5>ABOUT US</h5>
                            </Link>
                        </div>
                        <div className="bottom-link medium">
                            <Link to="/store-locator" className="link-title">
                                <h5>STORE LOCATOR</h5>
                            </Link>
                        </div>
                        <div className="bottom-link medium">
                            <Link to="/" className="link-title">
                                <h5>CHOOSE REGION</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="bottom-right">
                        <div className="bottom-input">
                            <input className="input-box"type="text" placeholder="Enter your email address"/>
                            <button className="input-button">JOIN DRAGON</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;