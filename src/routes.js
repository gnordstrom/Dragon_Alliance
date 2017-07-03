import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/Shared/NavBar/NavBar';
import XPNavigation from './components/Shared/XPNavigation/XPNavigation';

import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import CrossPerformance from './components/CrossPerformance/CrossPerformance';
import Team from './components/Team/Team';
import Video from './components/Video/Video';
import Products from './components/Products/Products';
import AboutUs from './components/AboutUs/AboutUs';
import StoreLocator from './components/StoreLocator/StoreLocator';

export default (
    <Switch>
        <Route path="/" exact render={() => (
            <div className="route-wrapper">
                <NavBar />
                <Home/> 
                <Footer />
            </div>
        )} />
            
        <Route path="/products" render={() => (
            <div className="route-wrapper">
                <NavBar />
                <Products/> 
                <Footer />
            </div>
        )} />
        <Route path="/video" render={() => (
            <div className="route-wrapper">
                <NavBar />
                <Video/> 
                <Footer />
            </div>
        )} />
        <Route path="/team" render={() => (
            <div className="route-wrapper">
                <NavBar />
                <Team/> 
                <Footer />
            </div>
        )} />
        <Route path="/cross-performance"  render={ (props) => (
            <div> 
                <div className="nav-wrapper">
                    <XPNavigation />
                </div>
                <div className="xp-wrapper">
                    <CrossPerformance newNav="true"/>
                </div>
                {/*<div>*/}
                    {/*<Footer/>*/}
                {/*</div>*/}
            </div>
        )}/>
        <Route path="/about-us" render={() => (
            <div className="route-wrapper">
                <NavBar />
                <AboutUs/> 
                <Footer />
            </div>
        )} />
        <Route path="/store-locator" render={() => (
            <div className="route-wrapper">
                <NavBar />
                <StoreLocator/> 
                <Footer />
            </div>
        )} />
    </Switch>
)
