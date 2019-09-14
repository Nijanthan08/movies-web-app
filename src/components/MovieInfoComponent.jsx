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
              <td key="1">
                <Image src={movie.base64Img} size="M" />
              </td>
              <td key="2">
                <table className="table table-striped" id="movieInfo">
                  <col width="20%" />
                  <col width="80%" />
                  <tbody>
                    {movieInfoTableColumns.map((column, index) => {
                      return (
                        <tr key={index}>
                          <TableHeader columns={[column]} wrapTR={false} />
                          <TableBody
                            dataArr={[movie]}
                            columns={[column]}
                            wrapTR={false}
                          />
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
