import React, { Component } from "react";

export class ComponentTwo extends Component {
  componentWillUnmount() {
    console.log("Unmounting Component Two");
  }

  render() {
    return <div>Component 2</div>;
  }
}

export default ComponentTwo;
