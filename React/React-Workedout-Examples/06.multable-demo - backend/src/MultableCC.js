import Axios from "axios";
import React, { Component } from "react";

const INITIAL_STATE = {
  number: "",
  result: "",
  fetch: [],
};

export default class ClassApp extends Component {
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
    Axios.get(
      `http://localhost/multable-demo.php?number=${this.state.number}`
    ).then((res) => {
      const data = res.data;

      this.setState({
        ...this.state,
        result: this.state.number,
        fetch: data,
      });
    });

    fetch(`http://localhost/multable-demo.php?number=${this.state.number}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          result: this.state.number,
          fetch: data,
        });
      });
  };

  multiple() {
    let entries = [];
    this.state.fetch.forEach((element) => {
      entries.push(
        <p key={element[1]}>
          {element[0]} x {element[1]} = {element[2]}
        </p>
      );
    });
    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input type="number" name="number" onChange={this.handleChange} />
          <br></br>
          <input type="submit" value="submit" onClick={this.handleClick} />
        </form>
        <span>{this.state.result === "" ? "" : this.multiple()}</span>
      </div>
    );
  }
}
