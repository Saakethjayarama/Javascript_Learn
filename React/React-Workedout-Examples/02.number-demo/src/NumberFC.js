import React, { useState } from "react";

const INITIAL_STATE = {
  number: "",
  result: "",
};

function NumberFC() {
  const changeHandler = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const datum = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
  };

  const clickHandler = (event) => {
    event.preventDefault();
    setState({
      ...state,
      result: datum[state.number],
    });
  };

  const [state, setState] = useState({ ...INITIAL_STATE });

  const { number, result } = state;

  return (
    <div>
      <form onSubmit={clickHandler}>
        <input
          name="number"
          type="number"
          value={number}
          min="0"
          max="10"
          onChange={changeHandler}
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
      {result}
    </div>
  );
}

export default NumberFC;
