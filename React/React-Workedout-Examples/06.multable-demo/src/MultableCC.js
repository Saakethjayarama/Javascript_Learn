import React, { Component } from "react";
import Multiple from "./Multiple";

const INITIAL_STATE = {
  number: "",
  result: "",
};

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    this.setState({
      ...this.state,
      result: this.state.number,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input type="number" name="number" onChange={this.handleChange} />
          <br></br>
          <input type="submit" value="submit" />
        </form>
        {this.state.result === "" ? "" : <Multiple no={this.state.result} />}
      </div>
    );
  }
}

export default ClassApp;
