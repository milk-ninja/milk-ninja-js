import React, { Component } from 'react';

import { getCurrentLocation } from './location_service';


export default class DirectionsView extends Component {
  constructor (... args) {
    super(...args);
  }


  initMap(center) {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService; 

    this.map = new google.maps.Map(this.map, {
      center: center,
      zoom: 18
    });

    directionsDisplay.setMap(this.map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);

    document.getElementById('mode').addEventListener('change', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}



// function initMap() {
//   var directionsDisplay = new google.maps.DirectionsRenderer;
//   var directionsService = new google.maps.DirectionsService;
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 14,
//     center: {lat: 37.77, lng: -122.447}
// //   });
//   directionsDisplay.setMap(map);

  // calculateAndDisplayRoute(directionsService, directionsDisplay);
  

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
      origin: {lat: 37.77, lng: -122.447},  // Haight.
      destination: {lat: 37.768, lng: -122.511},  // Ocean Beach.
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
      }, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
}

  render() {

    return (
      <div className="direcions-view">
        <div id="floating-panel">
          <b>Mode of Travel: </b>
          <select id="mode">
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Transit</option>
          </select>
        </div>

        <div id="directions-map" ref={ theDivElement => this.map = theDivElement }>

        </div>
      </div>


      )
  }

}


