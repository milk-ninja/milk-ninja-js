// Javascript Entry Point
import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import Home from './home';

render((
  <Router history={hashHistorloginy}>
    <Route path="/" component={Home}>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Route>       
  </Router>
), document.querySelector('.app'));




