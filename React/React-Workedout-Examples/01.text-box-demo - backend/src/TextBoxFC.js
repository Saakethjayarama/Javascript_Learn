import React, { useState } from "react";
import Axios from "axios";

function TextBoxFC() {
  const [state, setState] = useState({ fname: "", result: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    // Using axios
    Axios.get(`http://localhost/text-box-demo.php?name=${state.fname}`).then(
      (res) => {
        const { text } = res.data;
        setState({
          ...state,
          result: text,
        });
      }
    );

    // Using fetch api
    fetch(`http://localhost/text-box-demo.php?name=${state.fname}`)
      .then((res) => res.json())
      .then((data) => {
        const { text } = data;
        setState({
          ...state,
          result: text,
        });
      });
  };

  const { fname, result } = state;

  return (
    <div>
      <form onSubmit={handleClick}>
        Name:
        <input type="text" value={fname} name="fname" onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
      {result}
    </div>
  );
}

export default TextBoxFC;
