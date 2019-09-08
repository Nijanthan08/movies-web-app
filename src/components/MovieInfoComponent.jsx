import React, { Component } from "react";
import { getMovieInfo } from "../services/movies";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: getMovieInfo(this.props.match.params.id)
    };
  }
  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <React.Fragment>
        <h1>{movie.name}</h1>
      </React.Fragment>
    );
  }
}

export default MovieInfo;
