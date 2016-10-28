import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';



export default class Home extends Component {
  
  render() {
    return(
      <div className="home">

        <div className="title-image-wrapper">
          <img src="./images/milk_ninja_mockup_final.png"/>
        </div>

        <div className="describe-wrapper">
          <h2>Feed your baby, anywhere.</h2>
        </div>

        {/*<div className="register-wrapper">
        </div>*/}
        
        <div className="login-wrapper">  
          <Link to="/register"><p className="home-link">New User?</p></Link>
          <Link to="/login" id="login-btn">Login</Link>
        </div>
        

      </div>
      )
  }
}
