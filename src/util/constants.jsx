export const moviesTableColumns = [
  { label: "Title", value: "name", contentType: "link" },
  { label: "Genre", value: "genre", contentType: "text" },
  { label: "Language", value: "language", contentType: "text" },
  { label: "Release Year", value: "releaseYear", contentType: "text" },
  {
    label: "Rating",
    value: "rating",
    noData: "Not Rated",
    contentType: "specialChar"
  }
];
