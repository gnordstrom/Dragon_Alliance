import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import CrossPerformance from './components/CrossPerformance/CrossPerformance';
import Team from './components/Team/Team';
import Video from './components/Video/Video';
import Products from './components/Products/Products';
import AboutUs from './components/AboutUs/AboutUs';
import StoreLocator from './components/StoreLocator/StoreLocator';

export default (
    <Switch>
        <Route path="/" exact component={ Home }/>
        <Route path="/cross-performance" component={ CrossPerformance }/>
        <Route path="/team" component={ Team }/>
        <Route path="/video" component={ Video }/>
        <Route path="/products" component={ Products }/>
        <Route path="/about-us" component={ AboutUs }/>
        <Route path="/store-locator" component={ StoreLocator }/>
    </Switch>
)
