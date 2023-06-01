import React, { useState, Component } from "react";

const INITIAL_STATE = {
  operand1: "",
  operand2: "",
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
    const sum = parseInt(state.operand1) + parseInt(state.operand2);
    setState({
      ...state,
      result: "Sum: " + sum,
    });
  };

  console.log(state);
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Operand 1"
          name="operand1"
          value={state.operand1}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Operand 2"
          name="operand2"
          value={state.opoerand2}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Submit</button>
        <br />
      </form>
      {state.result}
    </div>
  );
}
