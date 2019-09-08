import React from "react";
import { Link } from "react-router-dom";

const PlainText = ({ data, column }) => {
  return data[column.value];
};

const Hyperlink = ({ data, column }) => {
  return <Link to={"/movies/" + data.id}>{data[column.value]}</Link>;
};

const SpecialCharacters = ({ data, column }) => {
  let specialCharType;
  if ("rating" === column.value) specialCharType = "fa fa-star";

  return (
    <React.Fragment>
      <i className={specialCharType} aria-hidden="true" /> &nbsp;
      {data[column.value] ? data[column.value] : column.noData}
    </React.Fragment>
  );
};

const Likes = ({ data, column }) => {
  return (
    <React.Fragment>
      <i className="fa fa-thumbs-up" aria-hidden="true" />
      &nbsp;
      {data[column.value1]}
      &nbsp;&nbsp;
      <i className="fa fa-thumbs-down" aria-hidden="true" />
      &nbsp;
      {data[column.value2]}
    </React.Fragment>
  );
};

const TableBody = ({ data, column }) => {
  if ("text" === column.contentType)
    return <PlainText data={data} column={column} />;
  else if ("link" === column.contentType)
    return <Hyperlink data={data} column={column} />;
  else if ("specialChar" === column.contentType)
    return <SpecialCharacters data={data} column={column} />;
  else if ("likes" === column.contentType)
    return <Likes data={data} column={column} />;
};

export default TableBody;
