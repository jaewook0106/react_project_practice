import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './Movie.css';

class Movie extends Component{

  // static propTypes = {
  //   title:React.propTypes.string.isRequired,
  //   poster:React.PropTypes.string
  // }

  render(){
    console.log(this.props)
    return(
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
      
    )
  }
}


class MoviePoster extends Component {
  render(){
    return (
      <img src={this.props.poster} alt="" className="img_movie"/>
    )
  }
}


export default Movie;