import React, { Component, useState } from "react";

import baarish from "./audios/Baarish.mp3";
import breakup from "./audios/Breakup.mp3";
import bulleya from "./audios/Bulleya.mp3";
import ikvaari from "./audios/Ikvaari.mp3";
import sanam from "./audios/Sanam.mp3";

const INITIAL_STATE = {
  selected: "",
  result: "",
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
    setState({
      ...state,
      result: "",
    });
    setState({
      ...state,
      result: state.selected,
      status: `Playing ${state.selected}`,
    });
  };

  const handlePlay = () => {
    setState({
      ...state,
      status: `Playing ${state.selected}`,
    });
  };

  const handlePause = () => {
    setState({
      ...state,
      status: `Paused ${state.selected}`,
    });
  };
  console.log(state);
  return (
    <div>
      <form onSubmit={handleClick}>
        Songs:
        <select name="selected" onChange={handleChange} value={state.selected}>
          <option value={baarish}>Baarish</option>
          <option value={breakup}>Breakup</option>
          <option value={bulleya}>Bulleya</option>
          <option value={ikvaari}>IkVaaria</option>
          <option value={sanam}>Sanam</option>
        </select>
        <input type="Submit" value="Submit" />
        <br />
      </form>
      {state.result === "" ? (
        ""
      ) : (
        <audio
          controls={true}
          autoPlay={true}
          onPause={handlePause}
          onPlay={handlePlay}
        >
          <source src={state.result} />
        </audio>
      )}
      {state.status === "" ? "" : <p>{state.status}</p>}
    </div>
  );
}
