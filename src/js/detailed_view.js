import React, { Component, PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';
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
      <div className="ratings-wrapper">

        <ul className="priv-clean-wrapper">
          <li>Privacy: {rating_info.privacy}</li> 
          <li>Cleanliness: {rating_info.cleanliness}</li> 
        </ul>

      </div>
    )
  }

  listComments(comment_info) {
    return(
      <div className="comments-wrapper">
        <span>Comments:{comment_info.comment}</span>
      </div>
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

        <ul className="detail-individual">
          <li><span className="place-name">{ place_information.place.name}</span></li>
          <li className="place-address">{ place_information.place.full_address }</li>          
          <li><img src={ place_information.place.avatar} id="detail-img"/></li>
          <li>{place_information.place.lat}, {place_information.place.lng} </li>
        </ul>

        <div className="all-info">
          <div className="more-info">
            <span>More Info:</span>
            { place_information.place.description }
          </div>

          
          <div className="detail-ratings">
            <span className="ratings-header">Average Rating<br/>(out of 5):</span>
            {place_information.ratings.map(::this.listRatings)}
          </div>
            
        </div>  
        {place_information.ratings.map(::this.listComments)}
        <div className="google-directions">
          {/*<Link to='/directions_view'>Get Directions</Link>*/}
          {/*<a href="https://www.google.com/maps/dir//34.04437,-84.3614937"> Directions</a>*/}
          <a href={`https://www.google.com/maps/dir//${place_information.place.lat},${place_information.place.lng}`} target="_blank">Directions To Here</a>
        </div>
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


