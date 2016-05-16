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

      getNearbyPlaces(data => {
        this.setState({places: data.places});
        // console.log(places);

              })
    }
    getPlace(place) {
      let placeImage = place.avatar_url ? place.avatar_url : './images/ninja_head.png';
      return(
        <Link to={`/places/${place.id}`}>
          <li key={place.id}>
            <div className="list-items">
              <div className="image-wrapper">
                <img src={place.avatar_url}/>
              </div>
              <div className="name-address-wrapper">

                <div className="name-wrapper">
                  {place.name}
                </div>
                <div className="address-wrapper">
                  {place.full_address}
                </div>

              </div>
            </div>
          </li>
        </Link>
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
