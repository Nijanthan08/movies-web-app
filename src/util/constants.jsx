export const moviesTableColumns = [
  {
    label: "",
    value: "base64Img",
    contentType: "image",
    sort: false,
    size: "S"
  },
  { label: "Title", value: "name", contentType: "link", sort: true },
  { label: "Genre", value: "genre", contentType: "text", sort: true },
  { label: "Language", value: "language", contentType: "text", sort: true },
  {
    label: "Release Year",
    value: "releaseYear",
    contentType: "text",
    sort: true
  },
  {
    label: "Rating",
    value: "rating",
    noData: "Not Rated",
    contentType: "specialChar",
    sort: true
  }
];

export const movieInfoTableColumns = [
  { label: "Genre", value: "genre", contentType: "text", sort: false },
  { label: "Language", value: "language", contentType: "text", sort: false },
  {
    label: "Release Year",
    value: "releaseYear",
    contentType: "text",
    sort: false
  },
  {
    label: "Rating",
    value: "rating",
    noData: "Not Rated",
    contentType: "specialChar",
    sort: false
  },
  {
    label: "Thumbs Up",
    value1: "likes",
    value2: "dislike",
    contentType: "likes",
    sort: false
  },
  { label: "Plot", value: "story", contentType: "text", sort: false }
];
