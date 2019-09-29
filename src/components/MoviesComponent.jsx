import React, { Component } from "react";
import { getMovies } from "../services/movies";
import MoviesTable from "./MoviesTable.jsx";
import _ from "lodash";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      itemsPerPage: 4,
      currentPage: 1,
      sortObj: { name: "releaseYear", order: "desc" }
    };
  }

  async componentDidMount() {
    this.props.toggleLoaderDisplay();
    const movies = await getMovies();
    this.setState({ movies });
    this.props.toggleLoaderDisplay();
  }

  handleSorting = sortObj => {
    this.setState({ sortObj });
  };

  render() {
    const { movies: allMovies, sortObj, loader } = this.state;

    if (loader) return <h1>Loading...</h1>;
    else if (allMovies.length === 0)
      return <h1>No Movies to Display. Try again after a while...</h1>;

    const movies = _.orderBy(allMovies, "createdTimestamp", "desc");

    return (
      <React.Fragment>
        <h1>Newly added Movies</h1>
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
