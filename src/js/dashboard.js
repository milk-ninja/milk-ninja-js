import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, hashHistory } from 'react-router';


// import FourSquare from './foursquare';




export default class Dashboard extends Component {
  constructor(...args) {
    super(...args);
    this.state = {

      place: [],
      value: ''
    }
  }

  clickHandler(){

    // FourSquare.get('/place', {q: this.state.value}).then(places => {

    //   this.setState({places});

    // });

  }

  changeHandler(event){

    this.setState({

      value: event.target.value

    });

  }
  
  render() {
    return(
      <div className="home">
        <div className="title-image-describe-wrapper">
          <h1>Dashboard</h1>
          <img src="./images/babyninja-300x300.png"/>
          <h2>Pinpointing your location...</h2>          
          <button onClick={::this.clickHandler}>Submit</button>

        </div>
        <div className="register-login-wrapper">
          <Link to="/register">Back to Home</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
      )
  }
}

// find the user
// loading bar
// ajax request to back end 
// load the list of places

// later: update the text to show that the page is updating and then that it has been found
// later: after 5 seconds error that they cant be found, turn on location services