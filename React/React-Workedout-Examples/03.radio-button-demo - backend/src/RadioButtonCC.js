import React, { Component } from "react";
import Axios from "axios";

export class RadioButtonCC extends Component {
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
    // Axios
    Axios.get(
      `http://localhost/radio-demo.php?gender=${this.state.gender}`
    ).then((res) => {
      const { result } = res.data;
      this.setState({
        ...this.state,
        result: result,
      });
    });

    //fetch
    fetch(`http://localhost/radio-demo.php?gender=${this.state.gender}`)
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        this.setState({
          ...this.state,
          result: result,
        });
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

export default RadioButtonCC;
