import React, { Component } from "react";
import { moviesTableColumns } from "../util/constants";
import Image from "./common/ImageComponent";
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
    const { movies, sortObj } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {moviesTableColumns.map(column => {
              return (
                <th
                  onClick={() => this.onSort(column.value)}
                  className="align-middle"
                >
                  <TableHeader column={column} sortObj={sortObj} />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => {
            return (
              <tr key={movie.id}>
                <td>
                  <Image src={movie.base64Img} size="S" />
                </td>
                {moviesTableColumns.map(column => {
                  return (
                    <td className="align-middle">
                      <TableBody data={movie} column={column} />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
