import React, { useState } from "react";

function TextBoxFC() {
  const [state, setState] = useState({ fname: "", result: "" });

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
      result: "Welcome " + state.fname,
    });
  };

  const { name } = state;
  const { result } = state;
  console.log(state);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          value={name}
          name="fname"
          placeholder="Name"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
      {result}
    </div>
  );
}

export default TextBoxFC;
