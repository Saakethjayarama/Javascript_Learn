import React, { Component } from "react";
import Axios from "axios";

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
  operator: "",
  result: "",
};

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    Axios.post(`http://localhost/calculator-demo.php`, {
      op1: this.state.operand1,
      op2: this.state.operand2,
      op: this.state.operator,
    }).then((res) => {
      const { result } = res.data;

      this.setState({
        ...this.state,
        result,
      });
    });

    fetch(`http://localhost/calculator-demo.php`, {
      method: "POST",
      body: JSON.stringify({
        op1: this.state.operand1,
        op2: this.state.operand2,
        op: this.state.operator,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;

        this.setState({
          ...this.state,
          result,
        });
      });
  };

  operate(a, b, op) {
    switch (op) {
      case "+":
        return parseInt(a) + parseInt(b);
      case "-":
        return parseInt(a) - parseInt(b);
      case "*":
        return parseInt(a) * parseInt(b);
      case "/":
        return parseInt(a) / parseInt(b);
      default:
        return parseInt(a) % parseInt(b);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          Operand 1
          <input type="text" name="operand1" onChange={this.handleChange} />
          <br />
          Operand 2
          <input type="text" name="operand2" onChange={this.handleChange} />
          <br />
          <input
            type="radio"
            name="operator"
            value="+"
            onChange={this.handleChange}
          />
          Add
          <input
            type="radio"
            name="operator"
            value="-"
            onChange={this.handleChange}
          />
          Subtract
          <input
            type="radio"
            name="operator"
            value="*"
            onChange={this.handleChange}
          />
          Multiply
          <input
            type="radio"
            name="operator"
            value="/"
            onChange={this.handleChange}
          />
          Divide
          <input
            type="radio"
            name="operator"
            value="%"
            onChange={this.handleChange}
          />
          Modulo
          <br />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        {this.state.result}
      </div>
    );
  }
}

export default ClassApp;
