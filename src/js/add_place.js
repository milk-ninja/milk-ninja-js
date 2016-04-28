import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import SSF from 'react-simple-serial-form';
import DropZone from 'react-dropzone';
import { ajax, ajaxSetup } from 'jquery';


export default class AddPlace extends Component {


    constructor() {
      super();

    }

    dataHandler(data) {

    let newPlace = new FormData();
    console.log(data);
    
    newPlace.append('place', data.place);
    newPlace.append('address', data.address);
    newPlace.append('feed_area_description', data.feed_area_description);
    newPlace.append('clean_rating', data.clean_rating);
    newPlace.append('private_rating', data.private_ratinnewPlaceg);
    newPlace.append('comments', data.comments);

    ajax({
      url:'https://mighty-spire-68004.herokuapp.com/XXXXXXX',
      type: 'POST',
      data: newPlace,
      cached: false,
      dataType: 'json',   
    }).then (hashHistory.push('/dashboard'))
  
    }

    render() {
      return(
        
        <div className="add-place">
          <SSF onData={::this.dataHandler}>
            <div className="add-place-form">
              <h4>Name of Place</h4>
              <input type="text" name="place" placeholder="What would you call this place?"/>
            </div>
            <div className="add-place-form">
              <h4>Address</h4>
              <input type="text" name="address" placeholder="Type the Address Here"/>
            </div>
            <div className="add-place-form">
              <h4>Describe the Area</h4>
              <input type="text" name="feed_area_description" placeholder="First floor...etc"/>
            </div>
            <div className="add-place-form">
            <h4>Cleanliness Rating</h4>
           {/*} <input type="number" name="clean_rating" placeholder="Type a Number between 1-5"/>*/}
              <ul className="radio-button">
                <li><label><input type="radio" name="clean" value="1"/>Poor</label></li>
                <li><label><input type="radio" name="clean" value="2"/>Fair</label></li>
                <li><label><input type="radio" name="clean" value="3"/>Average</label></li>
                <li><label><input type="radio" name="clean" value="4"/>Good</label></li>
                <li><label><input type="radio" name="clean" value="5"/>Excellent</label></li>
              </ul>
            </div>
            <div className="add-place-form">
            <h4>Privacy Rating</h4>
            {/*}  <input type="number" name="private_rating" placeholder="Type a Number between 1-5"/>*/}
              <ul className="radio-button">
                <li><label><input type="radio" name="privacy" value="1"/>Poor</label></li>
                <li><label><input type="radio" name="privacy" value="2"/>Fair</label></li>
                <li><label><input type="radio" name="privacy" value="3"/>Average</label></li>
                <li><label><input type="radio" name="privacy" value="4"/>Good</label></li>
                <li><label><input type="radio" name="privacy" value="5"/>Excellent</label></li>
              </ul>
            </div>
            <div className="add-place-form">
              <h4>Comments</h4>
              <textarea id="comments" name="comments"/>
            </div>
            <div className="add-btn">
              <button id="add-place-btn">Submit</button>
            </div> 
          </SSF>
        </div>

        )
  }
}