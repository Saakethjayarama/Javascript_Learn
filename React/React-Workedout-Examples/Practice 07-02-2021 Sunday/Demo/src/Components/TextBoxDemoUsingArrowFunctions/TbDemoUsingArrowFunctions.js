import React, { Component } from "react";

export class TbDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      result: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: "Welcome, " + this.state.name,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default TbDemo;
