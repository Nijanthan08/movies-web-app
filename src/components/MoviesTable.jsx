import React, { Component } from "react";
import TableBody from "./common/TableBodyComponents";
import TableHeader from "./common/TableHeaderComponents";

class MoviesTable extends Component {
  onSort = sortByColumn => {
    const sortObj = { ...this.props.sortObj };
    if (sortObj.name === sortByColumn) {
      sortObj.order = sortObj.order === "asc" ? "desc" : "asc";
    } else {
      sortObj.name = sortByColumn;
      sortObj.order = "asc";
    }

    this.props.handleSorting(sortObj);
  };

  renderSortIcon = columnName => {
    const sortObj = { ...this.props.sortObj };
    if (sortObj.name !== columnName) return null;
    if (sortObj.order === "asc")
      return (
        <React.Fragment>
          &nbsp; <i className="fa fa-sort-asc" aria-hidden="true" />
        </React.Fragment>
      );
    else
      return (
        <React.Fragment>
          &nbsp; <i className="fa fa-sort-desc" aria-hidden="true" />
        </React.Fragment>
      );
  };

  render() {
    const { movies, sortObj, columns } = this.props;

    return (
      <table className="table" id="moviesTable">
        <thead>
          <TableHeader
            columns={columns}
            sortObj={sortObj}
            onSort={this.onSort}
            wrapTR={true}
          />
        </thead>
        <tbody>
          <TableBody dataArr={movies} columns={columns} wrapTR={true} />
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
