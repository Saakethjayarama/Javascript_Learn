import React, { Component } from "react";

export class RegisterCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      gender: "",
      age: "",
      email: "",
      phone: "",
      password: "",
      status: "",
      dbName: "institution",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    fetch("http://localhost/signup.php", {
      method: "POST",
      body: JSON.stringify({ ...this.state }),
    }).then(() => {
      this.setState({
        ...this.state,
        status: "Registration Successful!",
      });
    });
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            name="fname"
            onChange={this.handleChange}
            value={this.state.fname}
          />
          <br />
          <br />
          <input
            type="radio"
            value="M"
            name="gender"
            onChange={this.handleChange}
            checked={this.state.gender === "M"}
          />{" "}
          Male
          <input
            type="radio"
            value="F"
            name="gender"
            onChange={this.handleChange}
            checked={this.state.gender === "F"}
          />{" "}
          Female <br />
          <br /> Age:
          <input
            type="number"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <br />
          <br />
          Email:
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <br />
          Phone Number:
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <br />
          <br />
          Password:
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.status}
      </>
    );
  }
}

export default RegisterCC;
