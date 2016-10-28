import React, {Component} from 'react';
import { $, ajax } from 'jquery';

import { getNearbyPlaces } from './location_service';



/*post_id: null,*/ 
export default class MapView extends Component {
  constructor (...args) {
    super(...args);

    this.state = { locationStatus: '' }	
  }




  makeMap(center) {
    this.map = new google.maps.Map(this.map, {
      center: center,
      zoom: 12,
    });
  }

  addMarker(coords) {
    new google.maps.Marker({
      position: coords,
      map: this.map,
      icon: './images/milk_ninja_baby_small_2.png',
      title: "Feeding Locations"
    })
  }

	userMarker(coords) {
    new google.maps.Marker({
      position: coords,
      map: this.map,
      icon: './images/Map-Marker-Ball-Pink-icon.png',
      title: "My Location"
    })
  }

  componentDidMount() {

    this.setState({locationStatus: 'Pinpointing your location..'});

      if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {

         let lat = position.coords.latitude;
         let lng = position.coords.longitude;


         this.makeMap({lat, lng});

         this.userMarker({lat, lng});

         getNearbyPlaces(data => {
          console.log('iterating places', data.places);
          data.places.forEach(place => {
            this.addMarker({lat: place.lat, lng: place.lng});
          })
         })

		  });

    }
    // return(
    //   <Link to={`/places/${place.id}`}>this.addMarker({lat: place.lat, lng: place.lng})</Link>
    //   )
  }
//scroll-blocker div is new Oct 2016
	render() {
		return (
			<div className="mapview">

				<div id="map" ref={ theActualDivElement => this.map = theActualDivElement }></div>
        <div className="scroll-blocker"></div>
			</div>
		)
	}
}



