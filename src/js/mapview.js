import React, {Component} from 'react';
import $ from 'jquery';

export default class MapView extends Component {

	componentWillMount() {
	  var map;
	  function initMap() {
	    let map = new google.maps.Map(document.getElementID('map'), {
	      center: {lat: 33.751894, lng: -84.391327},
	      zoom: 10
	    })
	  }
	}


	render() {
		return (
			<div className="mapview">
				<span> THIS IS THE MAP VIEW OF WHERE THE PERSON IS STANDING </span>
				<div id="map"></div>
			</div>
		)
	}
}