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
				<div id="map"></div>
			</div>
		)
	}
}