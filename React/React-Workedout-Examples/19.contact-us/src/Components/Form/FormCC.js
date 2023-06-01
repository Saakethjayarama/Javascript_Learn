import React, { Component } from "react";
import Axios from "axios";

export class FormCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      email: "",
      phone: "",
      message: "",
      result: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    Axios.post("http://localhost/addContact.php", {
      ...this.state,
      dbName: "institution",
    }).then(() => {
      this.setState({
        ...this.state,
        result: "Submitted successfully!",
      });
    });
  };

  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          Name:{" "}
          <input
            type="text"
            name="fname"
            onChange={this.handleChange}
            value={this.state.fname}
          />
          <br />
          <br />
          Email:{" "}
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <br />
          Phone Number:{" "}
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />{" "}
          <br />
          <br />
          Message:{" "}
          <textarea
            name="message"
            cols="30"
            rows="2"
            onChange={this.handleChange}
            value={this.state.message}
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.result}
      </div>
    );
  }
}

export default FormCC;
