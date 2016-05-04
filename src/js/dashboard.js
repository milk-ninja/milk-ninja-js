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


  
  render() {

     let currentUser = cookie.getJSON('currentUser');
     // console.log('current user', currentUser);
     // console.log('current user name', currentUser.first_name);
     // console.log('current user avatar', currentUser.avatar);



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
              <Link to={'/list_view'}><i className="fa fa-list" aria-hidden="true"/>List View</Link>
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



