import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import cookie from 'js-cookie';
import { ajax, ajaxSetup } from 'jquery';
import { hashHistory } from 'react-router';
import Dropzone from 'react-dropzone';

export default class Places extends Component {



  clickHandler(places) {
    console.log(places);    

    ajax({
      url:'https://mighty-spire-68004.herokuapp.com/places',
      type: 'POST',
      data: places,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false, 
    }).then((response) => {
      console.log(response);


      // cookie.set('currentUser', response.user, {expires: 3});
      // hashHistory.push('/dashboard');   

    })

  } 


          
  render() {
    return (
      <div className="places">
        <button onClick={x}>Show places</button>
      
      </div>

    )
  }


}