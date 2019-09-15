import React from "react";
import FormComponent from "./common/FormComponent";
import { movieSchema } from "../util/JoiSchema";
import InputFieldComponent from "./common/InputFieldComponent";
import { getGenres, getLanguages } from "../services/movies";
import { isJsonObjEmpty } from "../util/utils";
import { addMovie } from "./../services/movies";
import { ALERT_MESSAGE_IMAGE } from "./../util/constants";

class AddMovieComponent extends FormComponent {
  state = {
    data: {
      name: "",
      releaseYear: "",
      genreId: "",
      languageId: "",
      story: ""
    },
    image: {
      value: null,
      errorMsg: undefined,
      uploaded: false
    },
    errors: {},
    genres: getGenres(),
    languages: getLanguages()
  };

  schema = movieSchema;

  handleSubmit = async e => {
    e.preventDefault();
    const { data, image } = this.state;
    await this.validateInput(data, this.schema);

    if (isJsonObjEmpty(this.state.errors) && image.uploaded) {
      await addMovie(data, image.value);
    } else if (!image.uploaded) {
      this.updateImageState(false, ALERT_MESSAGE_IMAGE);
    }
  };

  handleImageValidation = e => {
    e.preventDefault();

    const img = e.target.files[0];
    if (!("image/jpeg" === img.type))
      this.updateImageState(false, ALERT_MESSAGE_IMAGE);
    else this.updateImageState(true, undefined, img);
  };

  updateImageState = (uploaded, errorMsg, value = null) => {
    let image = { ...this.state.image };
    image = uploaded
      ? { value, uploaded, errorMsg: undefined }
      : { value: undefined, uploaded, errorMsg };
    this.setState({ image });
  };

  render() {
    const { data, errors, genres, languages, image } = this.state;

    return (
      <div>
        <h1>Add a Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <InputFieldComponent
            type="text"
            value={data["name"]}
            error={errors["name"]}
            onChange={this.handleChange}
            name="name"
            label="Movie"
          />

          <InputFieldComponent
            type="yearly-calendar"
            value={data["releaseYear"]}
            error={errors["releaseYear"]}
            onChange={this.handleChange}
            name="releaseYear"
            label="Release Year"
          />

          <InputFieldComponent
            type="drop-down"
            value={data["genreId"]}
            error={errors["genreId"]}
            onChange={this.handleChange}
            name="genreId"
            label="Genre"
            list={genres}
          />

          <InputFieldComponent
            type="drop-down"
            value={data["languageId"]}
            error={errors["languageId"]}
            onChange={this.handleChange}
            name="languageId"
            label="Languages"
            list={languages}
          />

          <InputFieldComponent
            type="textarea"
            value={data["story"]}
            error={errors["story"]}
            onChange={this.handleChange}
            name="story"
            label="Plot"
          />

          <InputFieldComponent
            type="upload"
            value={image["value"]}
            error={image["errorMsg"]}
            onChange={this.handleImageValidation}
            name="image"
            label="Poster"
          />

          <button className="btn btn-secondary btn-sm">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddMovieComponent;
