import React, { Component } from "react";
import { getMovies } from "../services/movies";
import MoviesTable from "./MoviesTable.jsx";
import _ from "lodash";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies().map(movie => {
        return { ...movie, ...{ like: false } };
      }),
      itemsPerPage: 4,
      currentPage: 1,
      sortObj: { name: "releaseYear", order: "desc" }
    };
  }

  handleSorting = sortObj => {
    this.setState({ sortObj });
  };

  render() {
    const { movies: allMovies, sortObj } = this.state;
    const movies = _.orderBy(allMovies, [sortObj.name], [sortObj.order]);
    return (
      <React.Fragment>
        <MoviesTable
          movies={movies}
          sortObj={sortObj}
          handleSorting={this.handleSorting}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
