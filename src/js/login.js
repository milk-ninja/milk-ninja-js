<<<<<<< HEAD
import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import cookie from 'cookie-js';
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
				url:'https://FILL ME IN',
				type: 'POST',
				data: data,
				cached: false,
				dataType: 'json'
			}).then(response => {

				console.log('response', response)

				ajaxSetup({
					headers: {
						'Auth-Token': response.??.auth_token 
					}
				})
				cookie.set('currentUser', response.???, {expires: 3});
				hashHistory.push(`????`)
			})
		  })
		}
	}


	render () {
		return (
			<div className="login">
			  
			  <div>	
				<h1>Login</h1>
				<SSF onData={::this.dataHandler}>
					<div>
						<input type="text" name="username" placeholder="username"/>
					</div>
					<div>
						<input type="text" name="password" placeholder="password"/>
					</div>
					<button>Submit</button>
				</SSF>
			  </div>

			  <div>
			  	<Link to="/register">Register</Link>
			  </div>

			</div>
		)
	}

}
=======
import React, {Component} from 'react';
>>>>>>> fc1a1568601a3dbfa839099a3562c04f48733aed
