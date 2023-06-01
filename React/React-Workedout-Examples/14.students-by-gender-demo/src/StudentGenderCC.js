import Axios from "axios";
import React, { Component } from "react";
import Students from "./Students";

const INITIAL_STATE = {
  selected: "",
  result: "",
  fetchData: [],
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
      selected: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    fetch(`http://localhost/StudentsByGender.php?gender=${this.state.selected}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          result: this.state.selected,
          fetchData: data,
        });
      });

    Axios.get(
      `http://localhost/StudentsByGender.php?gender=${this.state.selected}`
    ).then((res) => {
      const data = res.data;
      this.setState({
        ...this.state,
        result: this.state.selected,
        fetchData: data,
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          Gender:
          <br />
          <input
            type="radio"
            name="gender"
            checked={"M" === this.state.selected}
            onChange={this.handleChange}
            value="M"
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            checked={"F" === this.state.selected}
            onChange={this.handleChange}
            value="F"
          />{" "}
          Female
          <br />
          <input type="submit" value="submit" />
        </form>
        {this.state.result === "" ? (
          ""
        ) : (
          <Students data={this.state.fetchData} />
        )}
      </div>
    );
  }
}

export default ClassApp;
