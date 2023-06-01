import Axios from "axios";
import React, { useState } from "react";
import Multiple from "./Multiple";

const INITIAL_STATE = {
  number: "",
  result: "",
  fetch: [],
};

export default function FunApp() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    Axios.get(`http://localhost/multable-demo.php?number=${state.number}`).then(
      (res) => {
        const data = res.data;

        setState({
          ...state,
          result: state.number,
          fetch: data,
        });
      }
    );

    fetch(`http://localhost/multable-demo.php?number=${state.number}`)
      .then((res) => res.json())
      .then((data) => {
        setState({
          ...state,
          result: state.number,
          fetch: data,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="number" name="number" onChange={handleChange} />
        <br></br>
        <input type="submit" value="submit" />
      </form>
      {state.result === "" ? "" : <Multiple data={state.fetch} />}
    </div>
  );
}
