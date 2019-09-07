import React, { Component } from "react";

class MoviesTable extends Component {
  onSort(sortByColumn) {
    console.log(sortByColumn);
    const sortObj = { ...this.props.sortObj };
    if (sortObj.name === sortByColumn) {
      sortObj.order = sortObj.order === "asc" ? "desc" : "asc";
    } else {
      sortObj.name = sortByColumn;
      sortObj.order = "asc";
    }

    this.props.handleSorting(sortObj);
  }

  render() {
    const { movies } = this.props;

    if (movies.length === 0) return null;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.onSort("name")}>Title</th>
            <th onClick={() => this.onSort("genre")}>Genre</th>
            <th onClick={() => this.onSort("language")}>Language</th>
            <th onClick={() => this.onSort("releaseYear")}>Release Year</th>
            <th onClick={() => this.onSort("rating")}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => {
            return (
              <tr key={movie._id}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.language}</td>
                <td>{movie.releaseYear}</td>
                <td>{movie.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
