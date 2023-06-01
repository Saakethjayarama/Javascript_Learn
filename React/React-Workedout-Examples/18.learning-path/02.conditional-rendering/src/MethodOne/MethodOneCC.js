import React, { Component } from "react";

export class MethodOneClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>LoggedIn!</div>;
    } else {
      return <div>Not LoggedIn</div>;
    }
  }
}

export default MethodOneClass;
