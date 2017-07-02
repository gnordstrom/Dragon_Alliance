import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-wrapper">
                    <div className="footer-link">HOME</div>
                    <div className="footer-link">PRODUCTS</div>
                    <div className="footer-link">NEWS</div>
                    <div className="footer-link">CROSS PERFORMANCE (XP)</div>
                    <div className="footer-link">ABOUT US</div>
                    <div className="footer-link">MEDIA INFORMATION</div>
                    <div className="footer-link">STORE LOCATOR</div>
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