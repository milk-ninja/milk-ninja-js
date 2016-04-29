import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, hashHistory } from 'react-router';
import { agax } from 'jquery';
import cookie from 'js-cookie';

// import Icon from 'font-awesome';

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

//PLACEHOLDER STATIC MAP

// componentWillMount() {
//   var map;
//   function initMap() {
//     let map = new google.maps.Map(document.getElementID('map'), {
//       center: {lat: 33.751894, lng: -84.391327},
//       zoom: 10
//     })
//   }
// }

//START OF COMPONENT WILL MOUNT FUNCTION
  // componentWillMount() {
  //    this.setState({locationStatus: 'Pinpointing your location..'});

  //    if ("geolocation" in navigator) {
  //       navigator.geolocation.getCurrentPosition(function(position)  {
  //         this.setState({locationStatus: 'Finding spots near you.'});

  //         ajax('')

  //       })
  //    }

  //   }   


    // this.setState({locationStatus: 'Pinpointing your location..'});     // run the code that pinpoints the location
     //      then (in the callback)
     //      this.setState({locationStatus: 'Finding spots near you.'});
     //      ajax -> ask the backend for spots based on location
     //           then
     //           show them the spots
     //           this.setState({locationStatus: 'Found X spots near you.'});


  
  render() {

     let currentUser = cookie.getJSON('currentUser');
     console.log('current user', currentUser);
     console.log('current user name', currentUser.first_name);
     console.log('current user avatar', currentUser.avatar)



    return (
        <div className="dashboard">
         
          <header>

            <span><img src={currentUser.avatar}/> {currentUser.first_name}</span>

            <button id="logout-btn" onClick={this.logOut}>Log Out</button>

            {/*<h2>{this.state.locationStatus}</h2>*/}  

          </header>

          <div className="main-wrapper">

               <main>

                    {this.props.children}

               </main>

          </div>

          <footer>

            <div className="nav-links">
              <Link to={'/add_place'}><i className="fa fa-search" aria-hidden="true"/>Find A Place</Link>
              <Link to={'/add_place'}><i className="fa fa-plus-circle" aria-hidden="true"/>Add A Place</Link>
            </div>

            <div className="official">
              <span>&copy; Milk Ninja 2016</span>
              <span>
                <Link to={'/privacy'}>Privacy Policy</Link>
              </span> 
            </div>

          </footer>

        </div>


      )

  }
}



