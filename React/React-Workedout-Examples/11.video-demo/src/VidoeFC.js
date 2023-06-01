import React, { useState } from "react";
import "./App.css";

import a from "./videos/a.mp4";
import b from "./videos/b.mp4";
import c from "./videos/c.mp4";
import d from "./videos/d.mp4";
import e from "./videos/e.mp4";

const INITIAL_STATE = {
  selected: a,
  result: "",
  status: "",
  list: {
    A: a,
    B: b,
    C: c,
    D: d,
    E: e,
  },
};

export default function FunApp() {
  const [state, setState] = useState({ ...INITIAL_STATE });

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
      result: state.selected,
      status: `Playing ${state.result}`,
    });
  };

  const handlePlay = () => {
    setState({
      ...state,
      status: `Playing ${state.result}`,
    });
  };

  const handlePause = () => {
    setState({
      ...state,
      status: `Paused ${state.result}`,
    });
  };

  const opts = (list) => {
    const vids = Object.keys(list);
    let options = [];
    vids.forEach((vid) => {
      options.push(<option value={state.list[vid]}>{vid}</option>);
    });
    return options;
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        Videos:
        <select name="selected" onChange={handleChange}>
          {opts(state.list)}
        </select>
        <input type="submit" value="Submit" />
        <br />
      </form>
      {state.result === "" ? (
        ""
      ) : (
        <video
          onPlay={handlePlay}
          onPause={handlePause}
          controls={true}
          autoPlay={true}
        >
          <source src={state.result} />
        </video>
      )}
      <br />
      {state.status}
    </div>
  );
}
