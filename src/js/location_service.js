
import { ajax } from 'jquery';


let location = null;

export function getCurrentLocation(callback) {

  if (location) {
    callback(location);
  } else if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition(position => {

       let lat = position.coords.latitude;
       let long = position.coords.longitude;

       location = { lat, long };
       callback(location);
     });

  } else {
    alert('cannot get your location');
  }
}

// getCurrentLocation(coords => {
//   console.log(coords.lat, coords.lng); 
// })

let nearbyPlaces = null;

export function getNearbyPlaces(callback) {

  if (nearbyPlaces) {
    callback(nearbyPlaces);
  } else {  
    getCurrentLocation(coords => {
      ajax({
        url:`https://mighty-spire-68004.herokuapp.com/places/find_nearby`,
        type: 'GET',
        data: coords,
        cached: false,
        dataType: 'json',   
      }).then(results => {
        nearbyPlaces = results;
        callback(nearbyPlaces);
      })
    })
  }

}

getNearbyPlaces(places => {
  console.log('places', places);
});
