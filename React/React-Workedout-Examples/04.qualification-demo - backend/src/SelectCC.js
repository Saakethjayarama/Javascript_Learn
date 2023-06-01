import React, { Component } from "react";
import Axios from "axios";

class SelectCC extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      qualification: "",
      result: "",
    };
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.preventDefault();
    //Axios
    Axios.get(
      `http://localhost/qualification-demo.php?qualification=${this.state.qualification}`
    ).then((res) => {
      const { result } = res.data;
      this.setState({
        ...this.state,
        result,
      });
    });

    //fetch
    fetch(
      `http://localhost/qualification-demo.php?qualification=${this.state.qualification}`
    )
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        this.setState({
          ...this.state,
          result,
        });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Qualification:{" "}
          <select
            name="qualification"
            onChange={this.handleChange}
            value={this.state.qualification}
          >
            <option value="">--Select--</option>
            <option value="BE-CS">BE-CS</option>
            <option value="BE-ME">BE-ME</option>
            <option value="BSc">BSc</option>
            <option value="BCom">BCom</option>
          </select>
          <br />
          <button name="submit">Submit</button>
        </form>
        <br />
        {this.state.result}
      </div>
    );
  }
}

export default SelectCC;
