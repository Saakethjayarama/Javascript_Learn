import Axios from "axios";
import React, { Component } from "react";

const INITIAL_STATE = {
  current: 0,
};

class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleIncrement = () => {
    const data = { val: this.state.current, mode: "INC" };

    Axios.post(`http://localhost/increment-decrement-demo.php`, data).then(
      (res) => {
        const { result } = res.data;

        this.setState({
          current: result,
        });
      }
    );

    fetch(`http://localhost/increment-decrement-demo.php`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;

        this.setState({
          current: result,
        });
      });
  };

  handleDecrement = () => {
    const data = { val: this.state.current, mode: "DEC" };

    Axios.post(`http://localhost/increment-decrement-demo.php`, data).then(
      (res) => {
        const { result } = res.data;

        this.setState({
          current: result,
        });
      }
    );

    fetch(`http://localhost/increment-decrement-demo.php`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;

        this.setState({
          current: result,
        });
      });
  };

  handleChange(event) {
    this.state({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="number"
          name="current"
          value={this.state.current}
          onChange={this.handleChange}
        />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <br />
      </div>
    );
  }
}

export default ClassApp;
