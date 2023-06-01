import React, { Component } from "react";
import Fruits from "./Fruits";
import FruitsKeys from "./FruitsKeys";
import FruitsIndex from "./FruitsIndex";

function AppFunction() {
  return (
    <div className="App">
      {/* <Fruits /> */}
      {/* <FruitsKeys /> */}
      <FruitsIndex />
    </div>
  );
}

export class AppClass extends Component {
  render() {
    return (
      <div className="App">
        {/* <Fruits /> */}
        {/* <FruitsKeys /> */}
        <FruitsIndex />
      </div>
    );
  }
}

export default AppClass;
