import React, { useState } from "react";

function RadioButtonFC() {
  const [state, setState] = useState({
    gender: "",
    result: "",
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
          checked={state.gender === "M"}
          onChange={handleChange}
        />
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="F"
          checked={state.gender === "F"}
          onChange={handleChange}
        />
        Female
        <br />
        <input type="submit" value="Submit" />
      </form>
      {state.result}
    </div>
  );
}

export default RadioButtonFC;
