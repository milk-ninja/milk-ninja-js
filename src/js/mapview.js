import React, {Component} from 'react';
import { $, ajax } from 'jquery';

import { getNearbyPlaces } from './location_service';



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


  makeMap(center) {
    this.map = new google.maps.Map(this.map, {
      center: center,
      zoom: 18
    });
  }

  addMarker(coords) {
    new google.maps.Marker({
      position: coords,
      map: this.map,
      icon: './images/ninja_head.png',
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

         this.addMarker({lat, lng});

         getNearbyPlaces(data => {
          console.log('iterating places', data.places);
          data.places.forEach(place => {
            console.log('adding place', place);
            this.addMarker({lat: place.lat, lng: place.lng});
          })
         })


         // for (var i = 0; i < 50; i ++) {
         //  let x = lat + Math.random() - 0.5;
         //  let y = lng + Math.random() - 0.5;
         //  this.addMarker({lat: x, lng: y});
         // }


         // let lat1 = '33.75';
         // let lng1 = '-84.385';
         // console.log (lat, lng);


         // console.log('this map', this.map);

		  // function initMap() {
    //   let myLatlng = new google.maps.LatLng(33.752, -84.3915);
    //   console.log(myLatlng);
		  // let map = new google.maps.Map(this.map, {
		  //     // center: {lat: 33.751894, lng: -84.391327},
		  //   center: {lat, lng},
		  //   zoom: 18
		  // });

		  // let marker = new google.maps.Marker({
		  // 	position: {lat, lng},
		  // 	map: map,
		  // 	title: "My Location"
		  // })

      // marker = new google.maps.Marker({
      //   position: myLatlng,
      //   // position: {33.752, -84.3915},
      //   map: map,
      //   title: "My Next Location"
      // })

      // function (data) {
      //   let myLatlng = new google.maps.LatLng(data.lat, data.lng);
      //   marker = new google.maps.Marker({
      //     position: myLatlng,
      //     map: map,
      //     title: data.title
      //   })
      // }

      // let marker1 = new google.maps.Marker({
      //   position: {lat1, lng1},
      //   map: map,
      //   title: "My Next Location"
      // })

	         // this.setState({locationStatus: 'Finding spots near you.'});
		  // }
      // marker1.setMap(map);

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


		// ajax({
		// 	url: `https://api.foursquare.com/v2/venues/search
		// 					?client_id=4U40TREA4FBFLA30KJMOZQ1N5JFD4GOBCP5UOAGAZ5PNOUWK
		// 					&client_secret=CVGJLHENYIVZBAHVKOAVJQHR3BJSP25U53R5VRPLXGSTRMEQ
		// 					&v=20130815
		// 					&ll=${lat},${lng}
		// 					&query=baby+stores`
		// }).then((response) => {
		// 	console.log(response);

		// })
