import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/Shared/NavBar/NavBar';
import XPNavigation from './components/Shared/XPNavigation/XPNavigation';
import Login from './components/Login/Login';

import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import CrossPerformance from './components/CrossPerformance/CrossPerformance';

import Team from './components/Team/Team';
import FreeSkiTeam from './components/Team/FreeSkiTeam/FreeSkiTeam';
import LifestyleTeam from './components/Team/LifestyleTeam/LifestyleTeam';
import MotoTeam from './components/Team/MotoTeam/MotoTeam';
import SurfTeam from './components/Team/SurfTeam/SurfTeam';
import SnowTeam from './components/Team/SnowTeam/SnowTeam';
import WakeTeam from './components/Team/WakeTeam/WakeTeam';

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

        <Route path="/login" exact render={() => (
            <div className="route-wrapper">
                <NavBar />
                <Login/> 
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

        {/* Team Views*/}
        
            <Route path="/team/free-ski" render={() => (
                <div className="route-wrapper">
                    <NavBar />
                    <Team/>
                    <FreeSkiTeam />
                    <Footer />
                </div>
            )} />
            <Route path="/team/lifestyle" render={() => (
                <div className="route-wrapper">
                    <NavBar />
                    <Team/>
                    <LifestyleTeam />
                    <Footer />
                </div>
            )} />
            <Route path="/team/moto" render={() => (
                <div className="route-wrapper">
                    <NavBar />
                    <Team/>
                    <MotoTeam />
                    <Footer />
                </div>
            )} />
            <Route path="/team/surf" render={() => (
                <div className="route-wrapper">
                    <NavBar />
                    <Team/> 
                    <SurfTeam />
                    <Footer />
                </div>
            )} />
            <Route path="/team/snow" render={() => (
                <div className="route-wrapper">
                    <NavBar />
                    <Team/>
                    <SnowTeam />
                    <Footer />
                </div>
            )} />
            <Route path="/team/wake" render={() => (
                <div className="route-wrapper">
                    <NavBar />
                    <Team/>
                    <WakeTeam />
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
