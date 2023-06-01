import React, { Component } from "react";

export class TextBoxBind extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      fname: "",
      result: "",
    };
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: "welcome " + this.state.fname,
    });
  }

  render() {
    const { name, result } = this.state;
    console.log(this.state);

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

export default TextBoxBind;
