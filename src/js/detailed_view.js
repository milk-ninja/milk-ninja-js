import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { ajax } from 'jquery';

export default class DetailedView extends Component {
  
  constructor(...args) {
    super(...args);
    this.state = {
      place_information: {}, 
      loading: true
    }
  }

  componentWillMount () {
    // console.log(places[0]);

    let place_id = this.props.params.id;

    ajax(`https://mighty-spire-68004.herokuapp.com/places/${place_id}`)
      .then(response => {
        console.log(response)
        this.setState({
          place_information: response,
          loading: false
        })
      })
  }

  listRatings(rating_info) {
    return(
      <ul>
      <li>Privacy: {rating_info.privacy}</li> 
      <li> Cleanliness: {rating_info.cleanliness} </li> 
      <li>  Comments: {rating_info.comment} </li>
      </ul>
    )
  }



  render() {
    if (this.state.loading){
      return (
        <div> Loading . . . </div>
      )
    }

    let { id } = this.props.params;

    let { place_information } = this.state;

    // let detailsOfPlace = ???.find(place => place.id === id);

    return (
      <div className="detailed-view">

        <ul className="detail_individual">
          <li className="place-name"> { place_information.place.name} </li>
          <li className="place-address">{ place_information.place.full_address } </li>          
          <li> <img src={ place_information.place.avatar} id="detail-img"/> </li>
          <li> Description: "{ place_information.place.description }" </li>

        </ul>

        <div className="detail_ratings">
          <span className="ratings-header">Ratings & Comments: </span>
            {place_information.ratings.map(::this.listRatings)}
        </div>

<<<<<<< HEAD
        <div className="google-directions">
          <Link to={DirectionsView}>Get Directions</Link> 
        </div>
=======


>>>>>>> b1387b1531131ca36e896a26c69d12505d9738be

      </div>

      )
  }
}



  // renderLoading() {
  //   return (
  //     <h1> Loading... </h1>
  //   )
  // }

  // loading() {
  //   let { loading } = this.state;
  //   loading ? this.render() : this.renderLoading()


