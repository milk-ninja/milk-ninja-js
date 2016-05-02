import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import SSF from 'react-simple-serial-form';
import DropZone from 'react-dropzone';
import { ajax, ajaxSetup } from 'jquery';

import cookie from 'js-cookie';


export default class AddPlace extends Component {


    constructor() {
      super();

    }

    dataHandler(data) {

    let newPlace = new FormData();
    // console.log(data);
    
    newPlace.append('name', data.name);
    newPlace.append('street', data.street);
    newPlace.append('city', data.city);
    newPlace.append('state', data.state);
    newPlace.append('zipcode', data.zipcode);
    newPlace.append('description', data.description);
    newPlace.append('lat', data.lat);
    newPlace.append('long', data.long);

    ajax({
      url:'https://mighty-spire-68004.herokuapp.com/places',
      type: 'POST',
      data: data,
      cached: false,
      dataType: 'json',   
    }).then ((response) => {

        console.log('response', response)

        ajaxSetup({
          headers: {
            'Auth-Token': response.user.auth_token 
          }
        })
        cookie.set('currentUser', response.user, {expires: 3});
        hashHistory.push('/dashboard')
      })
    }

    render() {
      return(
        
        <div className="add-place">
        <h1>Add A New Place...</h1>
        <span>to help others feed their baby in a quiet place.</span>
          <SSF onData={::this.dataHandler}>
            <div className="add-place-form">
              <h4>Name of Place</h4>
              <input type="text" name="name" placeholder="What would you call this place?"/>
            </div>
            <div className="add-place-form">
              <h4>Building Number & Street Name (add NE, SW, etc)</h4>
              <input type="text" name="street" placeholder="Type the Address Here"/>
            </div>
            <div className="add-place-form">
              <h4>City</h4>
              <input type="text" name="city" placeholder="Type the Address Here"/>
            </div>
            <div className="add-place-form">
              <h4>State</h4>
              <input type="text" name="state" placeholder="Type the Address Here"/>
            </div>
            <div className="add-place-form">
              <h4>Zip Code</h4>
              <input type="text" name="zipcode" placeholder="Type the Address Here"/>
            </div>
            <div className="add-place-form">
              <h4>Describe the Area</h4>
              <input type="text" name="description" placeholder="First floor...etc"/>
            </div>
            {/*<div className="add-place-form">
            <h4>Cleanliness Rating</h4>
           
              <ul className="radio-button">
                <li><label><input type="radio" className="input-circle" name="cleanliness" value="1"/>Poor</label></li>
                <li><label><input type="radio" className="input-circle" name="cleanliness" value="2"/>Fair</label></li>
                <li><label><input type="radio" className="input-circle" name="cleanliness" value="3"/>Average</label></li>
                <li><label><input type="radio" className="input-circle" name="cleanliness" value="4"/>Good</label></li>
                <li><label><input type="radio" className="input-circle" name="cleanliness" value="5"/>Excellent</label></li>
              </ul>
            </div>
            <div className="add-place-form">
            <h4>Privacy Rating</h4>
              <ul className="radio-button">
                <li><label><input type="radio" className="input-circle" name="privacy" value="1"/>Poor</label></li>
                <li><label><input type="radio" className="input-circle" name="privacy" value="2"/>Fair</label></li>
                <li><label><input type="radio" className="input-circle" name="privacy" value="3"/>Average</label></li>
                <li><label><input type="radio" className="input-circle" name="privacy" value="4"/>Good</label></li>
                <li><label><input type="radio" className="input-circle" name="privacy" value="5"/>Excellent</label></li>
              </ul>
            </div>
            <div className="add-place-form">
              <h4>Comments</h4>
              <textarea id="comments" name="comments"/>
            </div>*/}
            <div className="add-btn">
              <button id="add-place-btn">Submit</button>
            </div> 
          </SSF>
        </div>

        )
  }
}

// newPlace.append('cleanliness', data.cleanliness);
//     newPlace.append('privacy', data.privacy);

{/*} <input type="number" name="clean_rating" placeholder="Type a Number between 1-5"/>*/}
{/*}  <input type="number" name="private_rating" placeholder="Type a Number between 1-5"/>*/}
