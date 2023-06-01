import React, { Component } from "react";

export class WordClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      result: "",
    };
  }
  // If multiple form components are there [event.target.name] is used else name itself is used
  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value, // number: event.target.value
    });
  };

  words = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let result = this.words[this.state.number];
    if (!result) {
      result = "Not Implemented";
    }
    this.setState({
      ...this.state,
      result,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <input type="submit" value="Submit" />
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default WordClass;
