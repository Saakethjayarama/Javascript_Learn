import React, { Component } from "react";
import Axios from "axios";

export class TextBoxBind extends Component {
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

    // Using axios
    Axios.get(
      `http://localhost/text-box-demo.php?name=${this.state.fname}`
    ).then((res) => {
      const { text } = res.data;
      this.setState({
        ...this.state,
        result: text,
      });
    });

    // Using fetch api
    fetch(`http://localhost/text-box-demo.php?name=${this.state.fname}`)
      .then((res) => res.json())
      .then((data) => {
        const { text } = data;
        this.setState({
          ...this.state,
          result: text,
        });
      });
  };

  render() {
    const { fname, result } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            name="fname"
            value={fname}
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
