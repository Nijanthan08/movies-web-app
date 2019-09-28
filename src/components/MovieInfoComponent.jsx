import React, { Component } from "react";
import { getMovieInfo } from "../services/movies";
import Image from "./common/ImageComponent";
import { movieInfoTableColumns } from "./../util/constants";
import TableHeader from "./common/TableHeaderComponents";
import TableBody from "./common/TableBodyComponents";
import { isJsonObjEmpty } from "../util/utils";
import ReviewModal from "./common/ReviewModal";
import _ from "lodash";
import { toast } from "react-toastify";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      modalIsOpen: false
    };
  }

  async componentDidMount() {
    this.retrieveMovieInfo();
  }

  retrieveMovieInfo = async () => {
    this.props.toggleLoaderDisplay();
    const movie = await getMovieInfo(this.props.match.params.id);
    this.setState({ movie });
    this.props.toggleLoaderDisplay();
  };

  addReview = () => {
    const { user } = this.props;
    if (!user) {
      this.toggleModalDisplay();
      return;
    }

    const reviewedUserIds = this.state.movie.reviews.map(
      obj => obj.createdUserId
    );

    if (_.find(reviewedUserIds, id => id === user.id))
      toast.info("You have already reviewed the movie!!!");
    else this.toggleModalDisplay();
  };

  toggleModalDisplay = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    const { movie, modalIsOpen } = this.state;
    const { toggleLoaderDisplay, user } = this.props;

    if (isJsonObjEmpty(movie)) return <h1>Loading....</h1>;

    return (
      <React.Fragment>
        <ReviewModal
          movieId={movie.id}
          movieName={movie.name}
          modalIsOpen={modalIsOpen}
          toggleModalDisplay={this.toggleModalDisplay}
          toggleLoaderDisplay={toggleLoaderDisplay}
          retrieveMovieInfo={this.retrieveMovieInfo}
          user={user}
        />
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
        <div style={{ "vertical-align": "middle" }}>
          <h1 style={{ display: "inline-block" }}>Reviews </h1>
          &nbsp;&nbsp;
          <button
            className="btn btn-secondary btn-sm"
            onClick={this.addReview}
            style={{ display: "inline-block" }}
          >
            Review Movie
          </button>
        </div>
        <br />
        <PrintReviews reviews={movie.reviews} />
      </React.Fragment>
    );
  }
}

const PrintReviews = ({ reviews }) => {
  if (0 === reviews.length) return <h1>No Reviews Available</h1>;

  const orderedReviews = _.orderBy(reviews, "createTimestamp", "desc");

  return orderedReviews.map(obj => {
    return (
      <div
        style={{
          "border-top": "2px dashed #8c8b8b",
          "padding-top": "10px"
        }}
      >
        <div>
          <h6 style={{ display: "inline-block" }}>{obj.createdUserName}</h6>
          &nbsp;&nbsp;&nbsp;
          {"Y" === obj.likeMovie ? (
            <i className="fa fa-thumbs-up" aria-hidden="true" />
          ) : (
            <i className="fa fa-thumbs-down" aria-hidden="true" />
          )}
          &nbsp;&nbsp;&nbsp;
          <i className="fa fa-star" aria-hidden="true" /> &nbsp;
          {obj.rating}
        </div>

        <p>{obj.comments}</p>
      </div>
    );
  });
};

export default MovieInfo;
