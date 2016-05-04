
import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import cookie from 'js-cookie';
import { hashHistory, Link } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';


export default class Login extends Component {

	dataHandler(data) {
		if (
			data.username !== ''
			&& data.username.length > 3
			&& data.username.length < 16)
		{
			ajax({
				url: 'https://mighty-spire-68004.herokuapp.com/login',
				type: 'POST',
				data: data,
				cached: false,
				dataType: 'json'
			}).then((response) => {

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
	}


	render () {
		return (
			<div className="login">
			  
			  <div>	
				<h1>Login</h1>
				<SSF onData={this.dataHandler}>
					<div>
						<input type="text" name="username" className="reg-input-box" placeholder="username"/>
					</div>
					<div>
						<input type="password" name="password" className="reg-input-box" placeholder="password"/>
					</div>
					<button id="login-btn">Submit</button>
				</SSF>
			  </div>

			  <div>
			  	<Link to="/register" >Register</Link>
			  </div>

			</div>
		)
	}

}

