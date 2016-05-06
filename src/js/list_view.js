import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { ajax } from 'jquery';
import { getNearbyPlaces } from './location_service';

import cookie from 'js-cookie';



export default class ListView extends Component {

  constructor(...props) {
    super(...props);
    this.state = { places: [] };
  }


  componentWillMount() {

//     let { place } = this.props.params;
// console.log('place', place);
//     ajax({
//       url:`https://mighty-spire-68004.herokuapp.com/places/find_nearby`,
//       type: 'GET',
//       data: {
//         lat: '00.00',
//         long: '00.00'
//       },
//       cached: false,
//       dataType: 'json',   
//     }).then((loadedData) => {

//         console.log('loadedData', loadedData)

//         // ajaxSetup({
//         //   headers: {
//         //     'Auth-Token': response.user.auth_token 
//         //   }
//         // })
//         // this.setState({places: loadedData});
//         // cookie.set('currentUser', response.user, {expires: 3});
//         // hashHistory.push('/places')

//       })

      getNearbyPlaces(data => {
        this.setState({places: data.places});
        // console.log(places);

              })
    }
    getPlace(place) {
      let placeImage = place.avatar_url ? place.avatar_url : './images/ninja_head.png';
      return(
        <Link to={`/places/${place.id}`}><li key={place.id}><span><img src={placeImage}/></span><span>{place.name}</span></li></Link>
        )
    }


  render() {

    let { places } = this.state;
    console.log(places);

    return(
      <div className="list-view">
        <ul>
          {places.map(::this.getPlace)}
        </ul>
      </div>

      )
  }

}
