import React, { Component } from "react";

export default class MethodTwoCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <div>{"Logged In!"}</div>
        ) : (
          <div>{"Not Logged In!"}</div>
        )}
      </>
    );
  }
}
