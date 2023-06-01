import React, { Component } from "react";
import FrChild from "./FrChild";

export class FrParent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleClick = () => {
    // this.inputRef.current.style.display = "none";
    // this.inputRef.current.style.backgroundColor = "red";
    // this.inputRef.current.style.width = "100px";
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FrChild ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    );
  }
}

export default FrParent;
