import React, { Component, PropTypes } from 'react';
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

      <li>Privacy: {rating_info.privacy} Cleanliness: {rating_info.cleanliness} Comments: {rating_info.comment} </li>

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
          <li> { place_information.place.full_address } </li>          
          <li> <img src={ place_information.place.avatar} id="detail-img"/> </li>
          <li> Description: { place_information.place.description } </li>

        </ul>

        <ul className="detail_individual">
            {place_information.ratings.map(::this.listRatings)}
        </ul>

      </div>

      )
  }

  renderLoading() {
    return (
      <h1> Loading... </h1>
    )
  }

  loading() {
    let { loading } = this.state;
    loading ? this.render() : this.renderLoading()
  }

}
