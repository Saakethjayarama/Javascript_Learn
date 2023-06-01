import React, { Component } from "react";

export class RadioButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      result: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      gender: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: this.state.gender + " Selected",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="radio"
            name="gender"
            value="M"
            onChange={this.handleChange}
            checked={this.state.gender === "M"}
          />{" "}
          Male
          <br />
          <input
            type="radio"
            name="gender"
            value="F"
            onChange={this.handleChange}
            checked={this.state.gender === "F"}
          />{" "}
          Female
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default RadioButtonClass;
