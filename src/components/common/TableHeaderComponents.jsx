import React from "react";

const renderSortIcon = (columnName, sortObj) => {
  if (sortObj.name !== columnName) return null;
  if (sortObj.order === "asc")
    return (
      <React.Fragment>
        &nbsp; <i className="fa fa-sort-asc" aria-hidden="true" />
      </React.Fragment>
    );
  else
    return (
      <React.Fragment>
        &nbsp; <i className="fa fa-sort-desc" aria-hidden="true" />
      </React.Fragment>
    );
};

const PlainText = ({ column }) => {
  return column.label;
};

const TextWithSorting = ({ column, sortObj }) => {
  return (
    <React.Fragment>
      {column.label} {renderSortIcon(column.value, sortObj)}
    </React.Fragment>
  );
};

const TableHeader = ({ column, sortObj }) => {
  if (column.sort) return <TextWithSorting column={column} sortObj={sortObj} />;
  else return <PlainText column={column} />;
};

export default TableHeader;
