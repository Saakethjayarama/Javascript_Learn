import React, { useState, Component } from "react";

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
  operator: "",
  result: "",
};

export default function FunApp() {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      ...state,
      result:
        `${state.operand1} ${state.operator} ${state.operand2} =` +
        operate(state.operand1, state.operand2, state.operator),
    });
  };

  const operate = (a, b, op) => {
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
  };

  console.log(state);

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="operand1"
          placeholder="Operand 1"
          onChange={handleChange}
        />
        <input
          type="text"
          name="operand2"
          placeholder="Operand 2"
          onChange={handleChange}
        />
        <br />
        <input type="radio" name="operator" value="+" onChange={handleChange} />
        Add
        <input type="radio" name="operator" value="-" onChange={handleChange} />
        Subtract
        <input type="radio" name="operator" value="*" onChange={handleChange} />
        Multiply
        <input type="radio" name="operator" value="/" onChange={handleChange} />
        Divide
        <input type="radio" name="operator" value="%" onChange={handleChange} />
        Modulo
        <br />
        <input type="submit" value="submit" />
      </form>
      {state.result}
    </div>
  );
}
