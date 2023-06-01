import React, { Component, useState } from "react";

import ajanta from "./images/ajanta.jpg";
import golgumbaz from "./images/golgumbaz.jpg";
import hampi from "./images/hampi.jpg";
import lalbagh from "./images/lalbagh.jpg";
import mysorepalace from "./images/mysorepalace.jpg";
import tajmahal from "./images/tajmahal.jpg";
import vidhanasoudha from "./images/vidhanasoudha.jpg";

const INITIAL_STATE = {
  monument: mysorepalace,
  result: "",
};

export default function FunApp() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      ...state,
      result: state.monument,
    });
  };
  console.log(state);
  return (
    <div>
      <form onSubmit={handleClick}>
        Monument:
        <select name="monument" onChange={handleChange}>
          <option value={mysorepalace}>Mysore Palace</option>
          <option value={vidhanasoudha}>Vidhana Soudha</option>
          <option value={lalbagh}>Lalbagh</option>
          <option value={golgumbaz}>Gol Gumbaz</option>
          <option value={hampi}>Hampi</option>
          <option value={tajmahal}>Taj Mahal</option>
          <option value={ajanta}>Ajanta</option>
        </select>
        <input type="submit" value="submit" />
      </form>
      <div>
        {state.result === "" ? (
          ""
        ) : (
          <img src={state.result} alt="selectedone" />
        )}
      </div>
    </div>
  );
}
