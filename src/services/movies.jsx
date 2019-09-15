import { imageToBase64 } from "../util/utils";
import { httpPost, httpGet } from "./httpServices";

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Drama" },
  { id: 3, name: "Romance" },
  { id: 4, name: "Science Fiction" },
  { id: 5, name: "Horror" },
  { id: 6, name: "Comedy" },
  { id: 7, name: "Thriller" },
  { id: 8, name: "Sports" }
];

const languages = [
  { id: 1, name: "Tamil" },
  { id: 2, name: "English" },
  { id: 3, name: "Hindi" },
  { id: 4, name: "Malayalam" },
  { id: 5, name: "Telugu" },
  { id: 6, name: "Kanada" },
  { id: 7, name: "Chinese" },
  { id: 8, name: "Korean" }
];

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
  data.languageId = parseInt(data.genreId);
  data.base64Img = base64Img;
  data.createdBy = 1;
  data.active = "Y";

  const result = await httpPost("api/movies", data);
  console.log(result);
};

export const getGenres = () => {
  return genres;
};

export const getLanguages = () => {
  return languages;
};
