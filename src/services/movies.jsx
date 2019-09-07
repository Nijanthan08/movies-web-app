const movies = [
  {
    id: 1,
    name: "24",
    releaseYear: 2016,
    genre: "Science Fiction",
    language: "Tamil",
    story:
      "A scientist invents a time-travelling watch, which his evil twin brother wants to get hold of. Years later, the scientists son battles his uncle, who is still desperately in search of the watch.",
    rating: 7.8
  },
  {
    id: 2,
    name: "Avatar",
    releaseYear: 2009,
    genre: "Science Fiction",
    language: "English",
    story:
      "Jake, a paraplegic marine, replaces his brother on the Navi inhabited Pandora for a corporate mission. He is accepted by the natives as one of their own but he must decide where his loyalties lie.",
    rating: null
  },
  {
    id: 3,
    name: "Dangal",
    releaseYear: 2016,
    genre: "Sports",
    language: "Hindi",
    story:
      "Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
    rating: null
  }
];

export const getMovies = () => {
  return movies;
};
