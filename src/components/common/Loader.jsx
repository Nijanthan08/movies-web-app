import React, { Component } from "react";
import Loader from "react-loader-spinner";

class ReactLoader extends Component {
  render() {
    const { loader: displayLoader } = this.props;
    const style = {
      position: "fixed",
      display: displayLoader ? "block" : "none",
      "z-index": "99",
      opacity: "0.5",
      width: "100%",
      height: "100%",
      "padding-left": "43%",
      "padding-top": "20%",
      "background-color": "grey"
    };

    return (
      <div style={style}>
        <Loader
          type="Bars"
          color="#000000"
          height={100}
          width={100}
          visible={displayLoader}
        />
      </div>
    );
  }
}

export default ReactLoader;
