import React from "react";
import FormComponent from "./common/FormComponent";
import { movieSchema } from "../util/JoiSchema";
import InputFieldComponent from "./common/InputFieldComponent";
import { getGenres, getLanguages } from "./../services/movies";
import { isJsonObjEmpty } from "../util/utils";

class AddMovie extends FormComponent {
  state = {
    data: {
      name: "",
      releaseYear: "",
      genreId: "",
      languageId: "",
      story: ""
    },
    errors: {},
    genres: getGenres(),
    languages: getLanguages()
  };

  schema = movieSchema;

  handleSubmit = async e => {
    await this.validateInput(this.state.data, this.schema);
    if (isJsonObjEmpty(this.state.errors)) {
      console.log(this.state.data);
    }

    e.preventDefault();
  };

  render() {
    const { data, errors, genres, languages } = this.state;

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

          <button className="btn btn-secondary btn-sm">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
