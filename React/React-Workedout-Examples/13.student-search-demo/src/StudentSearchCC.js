import Axios from "axios";
import React, { Component } from "react";
import Student from "./Student";

const INITIAL_STATE = {
  usn: "",
  result: "",
  fetchData: {},
  status: "",
};

export default class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange(event) {
    event.preventDefault();

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();

    fetch(`http://localhost/StudentSearch.php?usn=${this.state.usn}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { usn } = data;

        if (!usn) {
          this.setState({
            ...this.state,
            status: "Data not found",
          });
        } else {
          this.setState({
            ...this.state,
            fetchData: data,
            result: this.state.usn,
            status: "",
          });
        }
      });

    Axios.get(`http://localhost/StudentSearch.php?usn=${this.state.usn}`).then(
      (res) => {
        const data = res.data;

        const { usn } = data;

        if (!usn) {
          this.setState({
            ...this.state,
            status: "Data not found",
          });
        } else {
          this.setState({
            ...this.state,
            fetchData: data,
            result: this.state.usn,
            status: "",
          });
        }
      }
    );
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          name="usn"
          onChange={this.handleChange}
          value={this.state.usn}
        />
        <button onClick={this.handleClick}>Submit</button>
        <br />
        {this.state.status}
        <br />
        {this.state.result === "" ? (
          ""
        ) : (
          <Student data={this.state.fetchData} />
        )}
      </div>
    );
  }
}
