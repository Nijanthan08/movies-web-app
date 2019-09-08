import React from "react";
import { Link } from "react-router-dom";

const PlainText = ({ movie, column }) => {
  return movie[column.value];
};

const Hyperlink = ({ movie, column }) => {
  return <Link to={"/Movies/" + movie.id}>{movie[column.value]}</Link>;
};

const SpecialCharacters = ({ movie, column }) => {
  let specialCharType;
  if ("rating" === column.value) specialCharType = "fa fa-star";

  return (
    <React.Fragment>
      <i class={specialCharType} aria-hidden="true" /> &nbsp;
      {movie[column.value] ? movie[column.value] : column.noData}
    </React.Fragment>
  );
};

const TableCellComponents = ({ movie, column }) => {
  if ("text" === column.contentType)
    return <PlainText movie={movie} column={column} />;
  else if ("link" === column.contentType)
    return <Hyperlink movie={movie} column={column} />;
  else if ("specialChar" === column.contentType)
    return <SpecialCharacters movie={movie} column={column} />;
};

export default TableCellComponents;
