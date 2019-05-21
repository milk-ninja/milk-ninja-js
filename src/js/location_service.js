
import { ajax } from 'jquery';


let location = null;

export function getCurrentLocation(callback) {

  if (location) {
    callback(location);
  } else if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition(position => {

       let lat = position.coords.latitude;
       let lng = position.coords.longitude;

       location = { lat, lng };
       callback(location);
     });

  } else {
    alert('cannot get your location');
  }
}

let nearbyPlaces = null;

export function getNearbyPlaces(callback) {

  if (false) {
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
        console.log('Results', results);
        nearbyPlaces = results;
        callback(nearbyPlaces);
      }).fail((error) => {
        console.log('error', error);
      })
    })
  }

}

getNearbyPlaces(places => {
  console.log('places', places);
});
