import React, {Component} from 'react';
import $ from 'jquery';


/*post_id: null,*/ 
export default class MapView extends Component {
  constructor (...args) {
    super(...args);

    this.state = { locationStatus: '' }	
  }

//START OF COMPONENT WILL MOUNT FUNCTION
  // componentWillMount() {
  //    this.setState({locationStatus: 'Pinpointing your location..'});

  //    if ("geolocation" in navigator) {
  //       navigator.geolocation.getCurrentPosition(function(position)  {
  //         this.setState({locationStatus: 'Finding spots near you.'});

  //         ajax('')

  //       })
  //    }

  //   }   


    // this.setState({locationStatus: 'Pinpointing your location..'});     // run the code that pinpoints the location
     //      then (in the callback)
     //      this.setState({locationStatus: 'Finding spots near you.'});
     //      ajax -> ask the backend for spots based on location
     //           then
     //           show them the spots
     //           this.setState({locationStatus: 'Found X spots near you.'});


// try {
// if ("geolocation" in navigator) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     document.write('You are at: ' + position.coords.latitude + ', ' + position.coords.longitude);
//   });
// } else {
//   document.write("Your device isnot supported!");
// }
// }
// catch(e) {
//   alert('something when wrong')
// }


	
  componentDidMount() {

      this.setState({locationStatus: 'Pinpointing your location..'});

      if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {

         let lat = position.coords.latitude;
         let lng = position.coords.longitude;

         console.log('this map', this.map);

		  // function initMap() {
		  let map = new google.maps.Map(this.map, {
		      // center: {lat: 33.751894, lng: -84.391327},
		    center: {lat, lng},
		    zoom: 16
		  });

		  let marker = new google.maps.Marker({
		  	position: {lat, lng},
		  	map: map,
		  	title: "My Location"
		  })
	         // this.setState({locationStatus: 'Finding spots near you.'});
		  // }
		});
	}

  }

	render() {
		return (
			<div className="mapview">
				<div id="map" ref={ theActualDivElement => this.map = theActualDivElement }></div>
			</div>
		)
	}
}
