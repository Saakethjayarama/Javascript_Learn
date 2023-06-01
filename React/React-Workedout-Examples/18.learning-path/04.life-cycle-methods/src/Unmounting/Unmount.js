import React, { Component } from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

export class Unmount extends Component {
  componentWillUnmount() {
    /**
     * * To Cancel any network request
     * * Remove Event Handlers
     * * Cancelling all subscription
     * * Invalidating timers
     * ! Should not call setState methods
     */
  }

  constructor(props) {
    super(props);

    this.state = {
      isOne: false,
    };
  }

  handleClick = () => {
    this.setState({
      isOne: !this.state.isOne,
    });
  };

  render() {
    return (
      <div>
        {this.state.isOne ? <ComponentOne /> : <ComponentTwo />}{" "}
        <button onClick={this.handleClick}>Toggle</button>
        <button
          onClick={() => {
            throw Error("Error thrown");
          }}
        >
          Throw Error
        </button>
      </div>
    );
  }

  static getDerivedStateFromError(error) {
    console.log("Inside getDerivedStateFromError method from Unmount.js");
    console.log(error);
  }

  componentDidCatch(error, info) {
    console.log("Inside getDerivedStateFromError method from Unmount.js");
    console.log("err", error);
    console.log("info", info);
  }
}

export default Unmount;
