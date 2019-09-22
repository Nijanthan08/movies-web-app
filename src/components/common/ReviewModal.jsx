import Modal from "react-modal";
import React from "react";
import FormComponent from "./FormComponent";
import { reviewSchema } from "./../../util/JoiSchema";
import { likeMovieValues } from "../../util/constants";
import InputFieldComponent from "./InputFieldComponent";
import { isJsonObjEmpty } from "./../../util/utils";
import { addReview } from "../../services/movies";

class ReviewModal extends FormComponent {
  state = {
    data: {
      createdUserId: null,
      createdUserName: "",
      likeMovie: "",
      rating: 0,
      comments: ""
    },
    errors: {}
  };

  schema = reviewSchema;

  handleSubmit = async e => {
    e.preventDefault();
    const { data } = this.state;
    await this.validateInput(data, this.schema);
    console.log(this.state.errors);
    if (isJsonObjEmpty(this.state.errors)) {
      const { movieId, toggleLoaderDisplay } = this.props;
      toggleLoaderDisplay();
      const reviewObj = { ...this.state.data };
      reviewObj.movieId = movieId;
      console.log(reviewObj);
      await addReview(reviewObj);
      toggleLoaderDisplay();
      //<Redirect to={"/Movies/" + movieId} />;
    }
  };

  render() {
    const { modalIsOpen, toggleModalDisplay } = this.props;
    const { data, errors } = this.state;
    const customStyles = {
      content: {
        width: "75%",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };

    return (
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <InputFieldComponent
          type="text"
          value={data["createdUserName"]}
          error={errors["createdUserName"]}
          onChange={this.handleChange}
          name="createdUserName"
          label="Reviewed By"
        />
        <InputFieldComponent
          type="radio"
          value={data["likeMovie"]}
          list={likeMovieValues}
          error={errors["likeMovie"]}
          onChange={this.handleChange}
          name="likeMovie"
          label="Like this movie"
        />
        <InputFieldComponent
          type="range"
          value={data["rating"]}
          error={errors["rating"]}
          onChange={this.handleChange}
          name="rating"
          min={0}
          max={10}
          label="Rating"
        />
        <InputFieldComponent
          type="textarea"
          value={data["comments"]}
          error={errors["comments"]}
          onChange={this.handleChange}
          name="comments"
          label="Comments"
        />
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        &nbsp;&nbsp;
        <button
          className="btn btn-secondary btn-sm"
          onClick={toggleModalDisplay}
        >
          Cancel
        </button>
      </Modal>
    );
  }
}

export default ReviewModal;
