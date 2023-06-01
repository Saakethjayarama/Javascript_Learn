import axios from "axios";
import React, { Component } from "react";

export class WordClassRest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      result: "",
    };
  }
  // If multiple form components are there [event.target.name] is used else name itself is used
  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value, // number: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://codersclub.in/rest/Word.php?n=" + this.state.number;
    console.log(url);

    //  Using fetch
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const { message } = data;
    //     this.setState({
    //       ...this.state,
    //       result: message,
    //     });
    //   });

    // Using Axios
    axios.get(url).then((res) => {
      const { message } = res.data;
      this.setState({
        ...this.state,
        result: message,
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <input type="submit" value="Submit" />
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default WordClassRest;
