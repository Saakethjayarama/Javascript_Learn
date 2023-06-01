import React, { Component } from "react";

export class RadioButtonArrow extends Component {
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
            checked={this.state.gender === "M"}
            onChange={this.handleChange}
          />
          Male
          <br />
          <input
            type="radio"
            name="gender"
            value="F"
            checked={this.state.gender === "F"}
            onChange={this.handleChange}
          />
          Female
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.result}
      </div>
    );
  }
}

export default RadioButtonArrow;
