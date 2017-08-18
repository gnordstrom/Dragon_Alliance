import React, { Component } from 'react';
// Image
import header from './assets/header.jpg';
// CSS
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <img src={header} alt="Login to Dragon"/>

                <div className="login-content">
                    <div className="login-box">
                        <div>
                            <label>Username: </label><input type="text" placeholder="username"/>
                        </div>
                        <br/>
                        <div>
                            <label>Password: </label><input type="text" placeholder="password"/>
                        </div>
                        <div className="login-button">
                            <button>Login</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;