import React, { Component } from "react";

export class MethodThreeCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <>{"LoggedIn"}</>;
  }
}

export default MethodThreeCC;
