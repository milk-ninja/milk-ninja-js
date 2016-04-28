import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';



export default class Privacy extends Component {
  
  render() {
    return(
      <div className="privacy-policy">
        <div className="title-image-describe-wrapper">
          <h1>Milk Ninja</h1>
          <img src="./images/babyninja-300x300.png"/>
          <h2>Privacy Policy</h2>
        </div>
        <div className="privacy-policy-full">
          <button><Link to="/">Back to Home Page</Link></button>
          <p>
            Googoo gaga gaga da gaagaa doo laa ga gaga laalaa gaga goo. 
              Doo doo yaya goo googoo ga da googoo da. 
              Googoo gaga gaga da gaagaa doo laa ga gaga laalaa gaga goo. 
              Doo doo yaya goo googoo ga da googoo da. 
              Googoo gaga gaga da gaagaa doo laa ga gaga laalaa gaga goo.
               Doo doo yaya goo googoo ga da googoo da.
          </p>        
        </div>
      </div>
      )
  }
}