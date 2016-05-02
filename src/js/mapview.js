import React, {Component} from 'react';
import { $, ajax } from 'jquery';


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

		ajax({
			url: `https://api.foursquare.com/v2/venues/search
							?client_id=4U40TREA4FBFLA30KJMOZQ1N5JFD4GOBCP5UOAGAZ5PNOUWK
							&client_secret=CVGJLHENYIVZBAHVKOAVJQHR3BJSP25U53R5VRPLXGSTRMEQ
							&v=20130815
							&ll=${lat},${lng}
							&query=baby+stores`
		}).then((response) => {
			console.log(response);

		})

  }

	render() {
		return (
			<div className="mapview">
				<div id="map" ref={ theActualDivElement => this.map = theActualDivElement }></div>
			</div>
		)
	}
}
