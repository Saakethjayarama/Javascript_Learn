import React, { Component } from "react";

export class TextBoxArrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      result: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: "Welcome " + this.state.fname,
    });
  };

  render() {
    const { name, result } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            name="fname"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="submit" />
          <br />
        </form>
        {result}
      </div>
    );
  }
}

export default TextBoxArrow;
