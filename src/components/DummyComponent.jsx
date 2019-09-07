import React, { Component } from "react";

class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Render...");
    return <h1>Dummy Component</h1>;
  }
}

export default Dummy;
