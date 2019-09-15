import { base64Img } from "../services/image";
import { imageToBase64 } from "../util/utils";
import { httpPost } from "./httpServices";

const movies = [
  {
    id: 1,
    name: "24",
    releaseYear: 2016,
    genre: "Science Fiction",
    language: "Tamil",
    story:
      "A scientist invents a time-travelling watch, which his evil twin brother wants to get hold of. Years later, the scientists son battles his uncle, who is still desperately in search of the watch.",
    rating: 7.8,
    base64Img: base64Img
  },
  {
    id: 2,
    name: "Avatar",
    releaseYear: 2009,
    genre: "Science Fiction",
    language: "English",
    story:
      "Jake, a paraplegic marine, replaces his brother on the Navi inhabited Pandora for a corporate mission. He is accepted by the natives as one of their own but he must decide where his loyalties lie.",
    rating: null,
    base64Img: base64Img
  },
  {
    id: 3,
    name: "Dangal",
    releaseYear: 2016,
    genre: "Sports",
    language: "Hindi",
    story:
      "Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
    rating: null,
    base64Img: base64Img
  }
];

const movieInfo = [
  {
    id: 1,
    name: "24",
    releaseYear: 2016,
    genre: "Science Fiction",
    language: "Tamil",
    story:
      "A scientist invents a time-travelling watch, which his evil twin brother wants to get hold of. Years later, the scientists son battles his uncle, who is still desperately in search of the watch.",
    rating: 7.8,
    base64Img: base64Img,
    likes: 2,
    dislike: 0,
    reviews: [
      {
        ID: 2,
        movieId: 1,
        createdUserId: 2,
        createdUserName: "Lokesh",
        likeMovie: "Y",
        comments:
          "A script that is not simplistic or formulaic, but Suriya pulls it off admirably.",
        rating: 7.2,
        createTimestamp: "2019-09-01T14:08:09.403Z"
      },
      {
        ID: 5,
        movieId: 1,
        createdUserId: 1,
        createdUserName: "Nijanthan",
        likeMovie: "Y",
        comments:
          "Suriyas performance, Vikram Kumars brilliant handling and narration of a story with time travel as its core and the superlative visual experience outdo the shortcomings of 24. It is a must watch.",
        rating: 7.8,
        createTimestamp: "2019-09-01T14:21:43.520Z"
      },
      {
        ID: 7,
        movieId: 1,
        createdUserId: 3,
        createdUserName: "Sharan",
        likeMovie: "N",
        comments:
          "Romance below par from the standard of entire movie. One time watchable...",
        rating: 6.3,
        createTimestamp: "2019-09-08T08:06:11.413Z"
      }
    ]
  }
];

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

export const getMovies = () => {
  return movies;
};

export const getMovieInfo = id => {
  return movieInfo[0];
};

export const getGenres = () => {
  return genres;
};

export const getLanguages = () => {
  return languages;
};

export const addMovie = async (data, image) => {
  const base64Img = await imageToBase64(image);
  data.genreId = parseInt(data.genreId);
  data.languageId = parseInt(data.genreId);
  data.base64Img = base64Img;
  data.createdBy = 1;
  data.active = "Y";
  console.log(data);
  httpPost("api/movies", data);
};
