import React from "react";
import { Link } from "react-router-dom";
import Image from "./ImageComponent";

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
      {null != data[column.value1] ? data[column.value1] : 0}
      &nbsp;&nbsp;
      <i className="fa fa-thumbs-down" aria-hidden="true" />
      &nbsp;
      {null != data[column.value2] ? data[column.value2] : 0}
    </React.Fragment>
  );
};

const TdContent = ({ data, column }) => {
  if ("text" === column.contentType)
    return <PlainText data={data} column={column} />;
  else if ("link" === column.contentType)
    return <Hyperlink data={data} column={column} />;
  else if ("specialChar" === column.contentType)
    return <SpecialCharacters data={data} column={column} />;
  else if ("likes" === column.contentType)
    return <Likes data={data} column={column} />;
  else if ("image" === column.contentType)
    return <Image src={data.base64Img} size={column.size} />;
};

const TableBody = ({ dataArr, columns, wrapTR }) => {
  const tableBody = dataArr.map(data => {
    return (
      <React.Fragment>
        {columns.map((column, index) => {
          return (
            <td key={index}>
              <TdContent data={data} column={column} />
            </td>
          );
        })}
      </React.Fragment>
    );
  });

  if (!wrapTR) return tableBody;

  return tableBody.map((row, index) => {
    return <tr key={index}>{row}</tr>;
  });
};

export default TableBody;
