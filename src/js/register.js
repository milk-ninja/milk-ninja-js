import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import cookie from 'js-cookie';
import { ajax, ajaxSetup } from 'jquery';
import { hashHistory } from 'react-router';
import Dropzone from 'react-dropzone';

export default class Register extends Component {

	constructor() {
		super();
		this.state = {
			preview: './images/profile-placeholder.png'
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

			// ajaxSetup({
			// 	headers: {
			// 		'Auth-Token': response.user.auth_token 
			// 	}
			// })

			cookie.set('currentUser', response.user, {expires: 3});
 		 	hashHistory.push('/dashboard');		

		})

	}	



					
	render() {
		return (
			<div className="register">
				<SSF onData={::this.dataHandler}>
					
					<div>
						<input type="text" name="first_name" placeholder="First Name"/>
					</div>
					<div>
						<input type="text" name="last_name" placeholder="Last Name"/>
					</div>
					<div>
						<input type="text" name="username" placeholder="Choose a username"/>
					</div>
					<div>
						<input type="email" name="email" placeholder="Email Address"/>
					</div>
					<div>
						<input type="password" name="password" placeholder="Enter a Password"/>
					</div>
					<div>
						<input type="text" name="zipcode" placeholder="Enter Your Zip Code"/>
					</div>

					<div className="picture">
						<Dropzone onDrop={::this.dropHandler}>
							<span>Update Profile Picture</span>
							<input type="hidden" name="avatar" value={this.state.preview}/>
							<img className="profile-picture" src={this.state.preview}/>
						</Dropzone>
					</div>
					<button>Submit</button>
				</SSF>
			
			</div>

		)
	}


}