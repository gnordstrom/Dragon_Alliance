import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-wrapper">
                    <Link to="/" className="footer-link">HOME</Link>
                    <Link to="/products"className="footer-link">PRODUCTS</Link>
                    <div className="footer-link">NEWS</div>
                    <Link to="/cross-performance" className="footer-link">CROSS PERFORMANCE (XP)</Link>
                    <Link to="/about-us" className="footer-link">ABOUT US</Link>
                    <div className="footer-link">MEDIA INFORMATION</div>
                    <Link to="/store-locator" className="footer-link">STORE LOCATOR</Link>
                    <div className="footer-link">LOG IN</div>
                    <div className="footer-link">CONTACT US</div>
                    <div className="footer-link">SITE MAP</div>
                </div>
                
                <div className="footer-copyright">
                    <span className="copyright-wording">
                        COPYRIGHT© 1997-2017 Dragon Alliance.  ALL RIGHTS RESERVED
                    </span>
                    <span>|</span>
                    <span className="copyright-link">PRIVACY POLICY</span>
                    <span>|</span>
                    <span className="copyright-link">HELP</span>
                    <span>|</span>
                    <span className="copyright-link">LEGAL</span>
                </div>
            </div>
        );
    }
}

export default Footer;