import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Home extends Component {
  
  render() {
    return(
      <div className="home">
        <div className="image-describe-wrapper">
          <img src="http://loremflickr.com/320/240"/>
          <h2>Find great locations where you can comfortably feed your baby.</h2>
        </div>
      </div>
      )
  }
}