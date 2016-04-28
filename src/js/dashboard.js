import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, hashHistory } from 'react-router';

import cookie from 'js-cookie';

// import FourSquare from './foursquare';

export default class Dashboard extends Component {
  
  constructor (...args) {
    super(...args);

    this.state = { post_id: null, locationStatus: '' }
  }


  logOut(){
          cookie.remove('currentUser');
          hashHistory.push('/');
     }

  // componentWillMount() {
  //    this.setState({locationStatus: 'Pinpointing your location..'});

  //    // run the code that pinpoints the location
  //         // then (in the callback)
  //         // this.setState({locationStatus: 'Finding spots near you.'});
  //         // ajax -> ask the backend for spots based on location
  //              // then
  //              // show them the spots
  //              // this.setState({locationStatus: 'Found X spots near you.'});
  // }

  
  render() {

     let currentUser = cookie.getJSON('currentUser');


    return (
        <div className="dashboard">
         
          <header>
             <img src="./images/babyninja-300x300.png"/>
              <span>Hi, {currentUser.first_name}</span>

              <button onClick={this.logOut}>Log Out</button>

              <h2>{this.state.locationStatus}</h2>        
          </header>

          <div className="main-wrapper">
               <aside>
                    <Link to={'/add_place'}>Add A Place</Link>
               </aside>

               <div className="content">

                    {this.props.children}

               </div>

          </div>
        </div>


      )

  }
}



