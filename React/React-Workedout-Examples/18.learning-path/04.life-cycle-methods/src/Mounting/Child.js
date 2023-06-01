import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Entered constructor from Child.js");
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Entered getDerivedStateFromProps from Child.js");
    return {};
  }

  render() {
    console.log("Entered render method from Child.js");
    return <div>Child.js</div>;
  }

  componentDidMount() {
    console.log("Entered componentDidMount method from Child.js");
  }
}

export default Child;
