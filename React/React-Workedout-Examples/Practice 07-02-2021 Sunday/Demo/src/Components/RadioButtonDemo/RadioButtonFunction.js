import React, { useState } from "react";

function RadioButtonFunction() {
  const [state, setState] = useState({
    result: "",
    gender: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      ...state,
      result: state.gender + " Selected",
    });
  };
  const handleChange = (event) => {
    setState({
      ...state,
      gender: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          name="gender"
          value="M"
          onChange={handleChange}
          checked={state.gender === "M"}
        />{" "}
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="F"
          onChange={handleChange}
          checked={state.gender === "F"}
        />{" "}
        Female
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div>{state.result}</div>
    </div>
  );
}

export default RadioButtonFunction;
