import React, { Component } from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';

import cookie from 'js-cookie';


export default class ListView extends Component {

  constructor(...props) {
    super(...props);
    this.state = { places: [] };
  }


  componentWillMount() {

    let { place } = this.props.params;
console.log('place', place);
    ajax({
      url:`https://mighty-spire-68004.herokuapp.com/places/find_nearby`,
      type: 'GET',
      data: {
        lat: '00.00',
        long: '00.00'
      },
      cached: false,
      dataType: 'json',   
    }).then((loadedData) => {

        console.log('loadedData', loadedData)

        // ajaxSetup({
        //   headers: {
        //     'Auth-Token': response.user.auth_token 
        //   }
        // })
        // this.setState({places: loadedData});
        // cookie.set('currentUser', response.user, {expires: 3});
        // hashHistory.push('/places')

      })
    }



  render() {
    return(
      <div className="list-view">
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>

      )
  }

}
