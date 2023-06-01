import React, { useState } from "react";

function WordFunction() {
  const [state, setState] = useState({
    number: 0,
    result: "",
  });

  // If multiple form components are there [event.target.name] is used else name itself is used
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value, // number: event.target.value
    });
  };

  const words = {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let result = words[state.number];
    if (!result) {
      result = "Not Implemented";
    }
    setState({
      ...state,
      result,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="number"
          onChange={handleChange}
          value={state.number}
        />
        <input type="submit" value="Submit" />
      </form>
      <div>{state.result}</div>
    </div>
  );
}

export default WordFunction;
