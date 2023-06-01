import React, { Component } from "react";

const INITIAL_STATE = {
  number: "",
  result: "",
};

export default class NumberCC extends Component {
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

  datum = {
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
    10: "Ten",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: this.datum[this.state.number],
    });
  };

  render() {
    const { number, result } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="number"
            type="number"
            value={number}
            min="0"
            max="10"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
          <br />
          {result}
        </form>
      </div>
    );
  }
}
