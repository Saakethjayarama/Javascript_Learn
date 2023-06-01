import React, { useState } from "react";

function MonumentFunction() {
  const [state, setState] = useState({
    monument: "Tajmahal.jpg",
    result: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      monument: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      ...state,
      result: state.monument,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="monument" onChange={handleChange} value={state.monument}>
          <option value="Tajmahal.jpg">Tajmahal</option>
          <option value="Qutb.jpg">Qutb</option>
          <option value="Konark.jpg">Konark</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      {state.result === "" ? null : (
        <img src={require("../../assets/" + state.result).default} />
      )}
    </div>
  );
}

export default MonumentFunction;
