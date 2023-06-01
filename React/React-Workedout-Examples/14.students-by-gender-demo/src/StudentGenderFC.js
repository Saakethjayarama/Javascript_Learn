import Axios from "axios";
import React, { useState } from "react";
import Students from "./Students";

const INITIAL_STATE = {
  selected: "",
  result: "",
  fetchData: [],
};

export default function FunApp() {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = (event) => {
    event.preventDefault();

    setState({
      ...state,
      selected: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    fetch(`http://localhost/StudentsByGender.php?gender=${state.selected}`)
      .then((res) => res.json())
      .then((data) => {
        setState({
          ...state,
          result: state.selected,
          fetchData: data,
        });
      });

    Axios.get(
      `http://localhost/StudentsByGender.php?gender=${state.selected}`
    ).then((res) => {
      const data = res.data;
      setState({
        ...state,
        result: state.selected,
        fetchData: data,
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        Gender:
        <br />
        <input
          type="radio"
          name="gender"
          checked={"M" === state.selected}
          onChange={handleChange}
          value="M"
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          checked={"F" === state.selected}
          onChange={handleChange}
          value="F"
        />{" "}
        Female
        <br />
        <input type="submit" value="submit" />
      </form>
      {state.result === "" ? "" : <Students data={state.fetchData} />}
    </div>
  );
}
