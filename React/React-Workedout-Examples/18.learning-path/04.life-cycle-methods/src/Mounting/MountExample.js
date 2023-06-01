import React, { Component } from "react";

export class MountExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "OT",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      name: "CC",
    };
  }

  componentDidMount() {
    fetch("http://codersclub.in/rest/welcome.php?name=Codersclub")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default MountExample;
