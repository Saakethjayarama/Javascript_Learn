import React, { Component } from "react";

export class CalculatorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operand1: "",
      operand2: "",
      operator: "",
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
    const url = `http://codersclub.in/rest/Calculator.php?operand1=${this.state.operand1}&operand2=${this.state.operand2}&operator=${this.state.operator}`;
    console.log(url);

    fetch(url)
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
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Operand1:{" "}
          <input
            type="text"
            name="operand1"
            onChange={this.handleChange}
            value={this.state.operand1}
          />{" "}
          <br />
          Operand2:{" "}
          <input
            type="text"
            name="operand2"
            onChange={this.handleChange}
            value={this.state.operand2}
          />{" "}
          <br />
          <input
            type="radio"
            name="operator"
            value="+"
            onChange={this.handleChange}
            checked={this.state.operator === "+"}
          />{" "}
          +<br />
          <input
            type="radio"
            name="operator"
            value="-"
            onChange={this.handleChange}
            checked={this.state.operator === "-"}
          />{" "}
          -<br />
          <input
            type="radio"
            name="operator"
            value="x"
            onChange={this.handleChange}
            checked={this.state.operator === "x"}
          />{" "}
          x<br />
          <input
            type="radio"
            name="operator"
            value="/"
            onChange={this.handleChange}
            checked={this.state.operator === "/"}
          />{" "}
          /<br />
          <input
            type="radio"
            name="operator"
            value="%"
            onChange={this.handleChange}
            checked={this.state.operator === "%"}
          />{" "}
          %<br />
          <input type="submit" value="Submit" />
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default CalculatorClass;
