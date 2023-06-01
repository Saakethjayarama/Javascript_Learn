import React, { useState } from "react";

function SelectFunction() {
  const [state, setState] = useState({
    city: "BNG",
    result: "",
  });

  const cities = {
    BNG: "Bangalore",
    MNG: "Mangalore",
    MYS: "Mysore",
  };

  const handleChange = (event) => {
    setState({
      ...state,
      city: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selected = cities[state.city];
    setState({
      ...state,
      result: selected + " Selected",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="city" onChange={handleChange} value={state.city}>
          <option value="BNG">Bangalore</option>
          <option value="MNG">Mangalore</option>
          <option value="MYS">Mysore</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <div>{state.result}</div>
    </div>
  );
}

export default SelectFunction;
