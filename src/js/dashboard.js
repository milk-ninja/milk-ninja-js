import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';



export default class Dashboard extends Component {
  
  render() {
    return(
      <div className="home">
        <div className="title-image-describe-wrapper">
          <h1>Dashboard</h1>
          <img src="./images/babyninja-300x300.png"/>
          <h2>Find a location.</h2>
          <input type="text" placeholder="Search"/>
          <button>Submit</button>
        </div>
        <div className="register-login-wrapper">
          <Link to="/register">Back to Home</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
      )
  }
}