import React, { Component, PropTypes } from 'react';
import { ajax } from 'jquery';

export default class DetailedView extends Component {
  
  constructor(...args) {
    super(...args);
    this.state = {
      comments: [], 
      loading: true
    }
  }

  componentWillMount () {
    ajax(`https://mighty-spire-68004.herokuapp.com/places/${place.id}`)
      .then(newComments => {
        console.log(newComments)
        // this.setState({
          // comments: newComments,
          // loading: false
        })
      // })
  }

  listComments(single) {
    return(
      <div className="list-of-comments"> {single.comment} </div>
    )
  }

  render() {
    let { id } = this.props.params;

    let { comments } = this.state;

    // let detailsOfPlace = ???.find(place => place.id === id);

    return (
      <div className="detailed-view">

        <ul className="detail_individual">
          <li> { detailsOfPlace.name} </li>
          <li> { detailsOfPlace.image} </li>
          <li> { detailsOfPlace.full_address } </li>
          <li> Cleanliness: { detailsOfPlace.cleanliness } </li>
          <li> Privacy: { detailsOfPlace.privacy } </li>
        </ul>

        <div className="comment_feed">
          {comments.map(::this.listComments)}
        </div>

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
