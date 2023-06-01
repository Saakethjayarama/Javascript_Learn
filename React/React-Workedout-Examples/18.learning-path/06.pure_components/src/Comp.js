import React, { Component } from "react";

export class Comp extends Component {
  // Does a complex comparision and changes if comparision returns true
  render() {
    console.log("Regular Component Render");
    return <div>Component {this.props.sec}</div>;
  }
}

export default Comp;
