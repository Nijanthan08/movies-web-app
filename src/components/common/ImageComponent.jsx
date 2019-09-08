import React from "react";

const Image = ({ src, size }) => {
  if ("S" === size)
    return (
      <img
        src={"data:image/jpg;base64," + src}
        className="rounded float-left"
        width="70px"
        height="105px"
      />
    );
  else
    return (
      <img
        src={"data:image/jpg;base64," + src}
        className="rounded float-left"
        width="70px"
        height="105px"
      />
    );
};

export default Image;
