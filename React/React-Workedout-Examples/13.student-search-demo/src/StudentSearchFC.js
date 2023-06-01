import Axios from "axios";
import React, { useState } from "react";
import Student from "./Student";

const INITIAL_STATE = {
  usn: "",
  result: "",
  fetchData: {},
  status: "",
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

    fetch(`http://localhost/StudentSearch.php?usn=${state.usn}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { usn } = data;

        if (!usn) {
          setState({
            ...state,
            status: "Data not found",
          });
        } else {
          setState({
            ...state,
            fetchData: data,
            result: state.usn,
            status: "",
          });
        }
      });

    Axios.get(`http://localhost/StudentSearch.php?usn=${state.usn}`).then(
      (res) => {
        const data = res.data;

        const { usn } = data;

        if (!usn) {
          setState({
            ...state,
            status: "Data not found",
          });
        } else {
          setState({
            ...state,
            fetchData: data,
            result: state.usn,
            status: "",
          });
        }
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="usn"
          onChange={handleChange}
          value={state.usn}
        />
        <input type="submit" value="Submit" />
        <br />
      </form>
      {state.status}
      <br />
      {state.result === "" ? "" : <Student data={state.fetchData} />}
    </div>
  );
}
