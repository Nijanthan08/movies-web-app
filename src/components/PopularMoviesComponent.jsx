import React, { Component } from "react";
import _ from "lodash";
import { getPopularMovies } from "./../services/movies";
import MoviesTable from "./MoviesTable";
import { popularMoviesTableColumns } from "./../util/constants";

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      sortObj: { name: "rating", order: "desc" }
    };
  }

  async componentDidMount() {
    this.props.toggleLoaderDisplay();
    const movies = await getPopularMovies();
    this.setState({ movies });
    this.props.toggleLoaderDisplay();
  }

  render() {
    const { movies: allMovies, sortObj } = this.state;
    const { loader } = this.props;

    if (loader) return <h1>Loading...</h1>;
    else if (allMovies.length === 0) return <h1>Try again after a while...</h1>;

    let movies = _.orderBy(allMovies, sortObj.name, sortObj.order);

    if (movies.length > 10) movies = _.dropRight(movies, movies.length - 10);

    return (
      <React.Fragment>
        <h1>Popular Movies</h1>
        <MoviesTable
          movies={movies}
          sortObj={sortObj}
          handleSorting={null}
          columns={popularMoviesTableColumns}
        />
      </React.Fragment>
    );
  }
}

export default PopularMovies;
