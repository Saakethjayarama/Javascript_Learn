import React, { Component } from "react";
import MountExample from "./Mounting/MountExample";
import Mounting from "./Mounting/Mounting";
import Unmount from "./Unmounting/Unmount";
import Updating from "./Updating/Updating";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 0,
    };
  }

  handleClick = () => {
    this.setState({
      val: this.state.val++,
    });
  };

  render() {
    return (
      <div>
        {/* <Mounting />
        <MountExample /> */}
        {/* <Updating no={this.state.val} />
        <input type="button" value="Inc" onClick={this.handleClick} /> */}
        <Unmount />
      </div>
    );
  }
}

export default App;
