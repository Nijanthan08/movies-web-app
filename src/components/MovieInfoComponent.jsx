import React, { Component } from "react";
import { getMovieInfo } from "../services/movies";
import Image from "./common/ImageComponent";
import { movieInfoTableColumns } from "./../util/constants";
import TableHeader from "./common/TableHeaderComponents";
import TableBody from "./common/TableBodyComponents";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: getMovieInfo(this.props.match.params.id)
    };
  }
  render() {
    const { movie } = this.state;

    return (
      <React.Fragment>
        <h1>{movie.name}</h1>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>
                <Image src={movie.base64Img} size="M" />
              </td>
              <td>
                <table className="table table-striped">
                  <tbody>
                    {movieInfoTableColumns.map(column => {
                      return (
                        <tr>
                          <th width="20%" scope="row">
                            <TableHeader column={column} sortObj={null} />
                          </th>
                          <td width="80%">
                            <TableBody data={movie} column={column} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MovieInfo;
