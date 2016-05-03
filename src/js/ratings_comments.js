import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import SSF from 'react-simple-serial-form';
import DropZone from 'react-dropzone';
import { ajax, ajaxSetup } from 'jquery';
import cookie from 'js-cookie';


export default class Ratings extends Component {
	constructor (...args) {
		super(...args);
		this.state = {
			post: {}
		}
	}

	dataHandler () {

	}

	render () {
		let { post } = this.state;
		return (
		  <div className="ratings_comments">
		  	<h1>Tell us more about this place:</h1>
		  	{/*} <span>{post.name}</span>*/}
			  <SSF onData={::this.dataHandler}>
	            <div className="add-rating-form">
	            	<h4>Cleanliness Rating</h4>
	           
	              	<ul className="radio-button">
			            <li><label><input type="radio" className="input-circle" name="cleanliness" value="1"/>Poor</label></li>
			            <li><label><input type="radio" className="input-circle" name="cleanliness" value="2"/>Fair</label></li>
			            <li><label><input type="radio" className="input-circle" name="cleanliness" value="3"/>Average</label></li>
			            <li><label><input type="radio" className="input-circle" name="cleanliness" value="4"/>Good</label></li>
			            <li><label><input type="radio" className="input-circle" name="cleanliness" value="5"/>Excellent</label></li>
	                </ul>
	            </div>
	            
	            <div className="add-rating-form">
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
	              <textarea id="comments" name="comments" placeholder="Start your review..."/>
	            </div>
	            <div>
	              <button id="add-rating">Submit</button>
	            </div>
	         </SSF>
          </div>
    	)
	}
}