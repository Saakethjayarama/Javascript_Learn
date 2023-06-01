import React, { Component } from "react";

export class LoginCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      status: "",
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
    console.log(this.state);

    fetch("http://localhost/authenticate.php", {
      method: "POST",
      body: JSON.stringify({ ...this.state, dbName: "institution" }),
    })
      .then(async (res) => res.json())
      .then((data) => {
        const { status } = data;
        if (status) this.setState({ ...this.state, status });
        else {
          this.setState({
            ...this.state,
            status: "Logged In!",
          });
        }
      });
  };

  render() {
    const { email, pasword } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Email:{" "}
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <br />
          <br />
          Password:
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            password={pasword}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.status}
      </div>
    );
  }
}

export default LoginCC;
