import React, { Component } from "react";

export class ComponentOne extends Component {
  componentWillUnmount() {
    console.log("Unmounting Component One");
  }

  render() {
    return <div>Component 1</div>;
  }
}

export default ComponentOne;
