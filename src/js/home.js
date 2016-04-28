import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';



export default class Home extends Component {
  
  render() {
    return(
      <div className="home">

        <div className="title-image-wrapper">
          <h1>Milk Ninja</h1>
          <img src="./images/babyninja-300x300.png"/>
        </div>

        <div className="describe-wrapper">
          <h2>Find great locations where you can comfortably feed your baby.</h2>
        </div>

        <div className="register-wrapper">
          <p className="home-link">New User?</p>
          <Link to="/register" className="home-link" id="register-btn">Find A Place</Link>
        </div>
        
        <div className="login-wrapper">  
          <p className="home-link">Returning User?</p>
          <Link to="/login" id="login-btn" className="home-link">Login</Link>
        </div>

      </div>
      )
  }
}

          // <Link to="/dashboard" className="home-link">Dashboard</Link>
          // <Link to="/add_place" className="home-link">Add A Place</Link>
          // <Link to="/privacy" className="home-link">Privacy Policy</Link>