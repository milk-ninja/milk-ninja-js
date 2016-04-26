import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';



export default class Home extends Component {
  
  render() {
    return(
      <div className="home">
        <div className="title-image-describe-wrapper">
          <h1>Milk Ninja</h1>
          <img src="./images/babyninja-300x300.png"/>
          <h2>Find great locations where you can comfortably feed your baby.</h2>
        </div>
        <div className="register-login-wrapper">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
      )
  }
}