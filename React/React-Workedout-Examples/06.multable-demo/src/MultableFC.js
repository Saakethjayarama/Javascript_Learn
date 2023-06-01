import React, { useState, Component } from "react";
import Multiple from "./Multiple";

const INITIAL_STATE = {
  number: "",
  result: "",
};

function MultableFC() {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    setState({
      ...state,
      result: state.number,
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleClick}>
        <input type="number" name="number" onChange={handleChange} />
        <br></br>
        <input type="submit" value="submit" />
      </form>
      <span>{state.result === "" ? "" : <Multiple no={state.result} />}</span>
    </div>
  );
}

export default MultableFC;
