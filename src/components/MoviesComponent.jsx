import React, { Component } from "react";
import _ from "lodash";
import { getMovies } from "../services/movies";
import MoviesTable from "./MoviesTable.jsx";
import { moviesTableColumns } from "../util/constants";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      itemsPerPage: 4,
      currentPage: 1,
      sortObj: { name: "createdTimestamp", order: "desc" }
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
    const { movies: allMovies, sortObj } = this.state;
    const { loader } = this.props;

    if (loader) return <h1>Loading...</h1>;
    else if (allMovies.length === 0)
      return <h1>No Movies to Display. Try again after a while...</h1>;

    const movies = _.orderBy(allMovies, sortObj.name, sortObj.order);

    return (
      <React.Fragment>
        <h1>Newly added Movies</h1>
        <MoviesTable
          movies={movies}
          sortObj={sortObj}
          handleSorting={this.handleSorting}
          columns={moviesTableColumns}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
