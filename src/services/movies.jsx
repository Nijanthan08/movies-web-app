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

export const getPopularMovies = async () => {
  const { data: movies } = await httpGet("api/movies/popular");
  return movies;
};

export const getMovieInfo = async id => {
  const { data } = await httpGet(`api/movies/${id}`);
  return data.length ? data[0] : {};
};

export const addMovie = async (data, image, user) => {
  const base64Img = await imageToBase64(image);
  data.genreId = parseInt(data.genreId);
  data.languageId = parseInt(data.languageId);
  data.base64Img = base64Img;
  data.createdBy = user ? user.id : null;
  data.active = "Y";

  return await httpPost("api/movies", data);
};

export const addReview = async data => {
  return await httpPost("api/movies/review", data);
};
