// Javascript Entry Point
import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import Home      from './home';
import Register  from './register';
import Login     from './login';
import Dashboard from './dashboard';
import AddPlace   from './add_place';
import Privacy   from './privacy';
import MapView   from './mapview';
import Places   from './places';
// import Ratings from './ratings_comments';
import ListView   from './list_view';
import DetailedView   from './detailed_view';








render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    <Route path="/dashboard" component={Dashboard}>
    	
        <IndexRoute component={MapView}/>
        <Route path="/list_view" component={ListView}/>
    	<Route path="/add_place" component={AddPlace}/>
    	<Route path="/privacy" component={Privacy}/>
        <Route path="/places" component={Places}/> 
        {/*} <Route path="/ratings_comments" component={Ratings}/>*/} 

    </Route>    
  </Router>
), document.querySelector('.app'));



