import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import cookie from 'js-cookie';
import { ajax, ajaxSetup } from 'jquery';
import { hashHistory, Link } from 'react-router';
import Dropzone from 'react-dropzone';

export default class Register extends Component {

	constructor() {
		super();
		this.state = {
			preview: './images/milk_ninja_baby.png'
		}
	}

	dropHandler([file]) {
		console.log([file]);
		this.setState({preview: file.preview});
		this.file = file;
	}	


	dataHandler(data) {
		console.log(data);		

		let newUser = new FormData();

		newUser.append('avatar', this.file);
		newUser.append('first_name', data.first_name);
		newUser.append('last_name', data.last_name);
		newUser.append('username', data.username);
		newUser.append('email', data.email);
		newUser.append('password', data.password);
		newUser.append('zipcode', data.zipcode);
		console.log(newUser);

		ajax({
			url:'https://mighty-spire-68004.herokuapp.com/register',
			type: 'POST',
			data: newUser,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false,	
		}).then((response) => {
			console.log(response);


			cookie.set('currentUser', response.user, {expires: 3});
 		 	hashHistory.push('/dashboard');		

		})

	}	



					
	render() {
		return (
			<div className="register">
				<div>
			  		<img src="./images/milk_ninja_mockup_final.png" className="ninja-baby-single-reg"/>
			  	</div>
			  {/*<h1>Registration</h1>*/}
				<SSF onData={::this.dataHandler} className="reg-form">
					<div className="picture">
						<Dropzone onDrop={::this.dropHandler} className="dropzone">
							<span id="profile-pic-id">Add A Profile Picture...</span>		
							<input className="profile-picture" type="hidden" name="avatar" value={this.state.preview}/>
							<img className="profile-picture" src={this.state.preview} alt="Update Profile Picture"/>
				
						</Dropzone>
					</div>
					<div className="shadow-form">
						<div className="shadow-form-bottom">
							<div className="register-input">
								<input type="text" name="first_name" className="reg-input-box1" placeholder="First Name"/>
							</div>
							<div className="register-input">
								<input type="text" name="last_name" className="reg-input-box" placeholder="Last Name"/>
							</div>
							<div className="register-input">
								<input type="text" name="username" className="reg-input-box" placeholder="Choose a username"/>
							</div>
							<div className="register-input">
								<input type="email" name="email" className="reg-input-box" placeholder="Email Address"/>
							</div>
							<div className="register-input">
								<input type="password" name="password" className="reg-input-box" placeholder="Enter a Password"/>
							</div>
							<div className="register-input">
								<input type="text" name="zipcode" className="reg-input-box2" placeholder="Enter Your Zip Code"/>
							</div>
						</div>
					</div>
					<br/>

					<button id="login-btn" >Submit</button>
				</SSF>
				<div>
		      <Link to="/login" className="home-link" className="register-link">Already have an account?  Sign In Here!</Link>
		    </div>	
			</div>

		)
	}

}