import React, { useState } from "react";

function SelectFC() {
  const [state, setState] = useState({
    qualification: "",
    result: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      ...state,
      result: state.qualification,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Qualification:{" "}
        <select
          name="qualification"
          onChange={handleChange}
          value={state.qualification}
        >
          <option value="">--Select--</option>
          <option value="BE-CS">BE-CS</option>
          <option value="BE-ME">BE-ME</option>
          <option value="BSc">BSc</option>
          <option value="BCom">BCom</option>
        </select>
        <br />
        <button name="submit">Submit</button>
      </form>
      <br />
      {state.result}
    </div>
  );
}

export default SelectFC;
