// Javascript Entry Point
import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import Home      from './home';
import Register  from './register';
import Login     from './login';
import Dashboard from './dashboard';
import Privacy   from './privacy';



render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/privacy" component={Privacy}/>      
  </Router>
), document.querySelector('.app'));



