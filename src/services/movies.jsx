import { imageToBase64 } from "../util/utils";
import { httpPost, httpGet } from "./httpServices";

export const getGenres = async () => {
  const { data } = await httpGet("api/movies/genres");
  return data;
};

export const getLanguages = async () => {
  const { data } = await httpGet("api/movies/languages");
  return data;
};

export const getMovies = async () => {
  const { data: movies } = await httpGet("api/movies");
  return movies;
};

export const getMovieInfo = async id => {
  const { data: movieInfo } = await httpGet(`api/movies/${id}`);
  return movieInfo[0];
};

export const addMovie = async (data, image) => {
  const base64Img = await imageToBase64(image);
  data.genreId = parseInt(data.genreId);
  data.languageId = parseInt(data.languageId);
  data.base64Img = base64Img;
  data.createdBy = 1;
  data.active = "Y";

  const result = await httpPost("api/movies", data);
  console.log(result);
};
