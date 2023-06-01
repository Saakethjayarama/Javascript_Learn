import Axios from "axios";
import React, { useState } from "react";

const INITIAL_STATE = {
  selected: "BA",
  list: {
    BA: "Baarish",
    BR: "Breakup",
    BU: "Bulleya",
    IK: "Ikvaari",
    SN: "Sanam",
  },
  status: "",
  result: "",
};

export default function FunApp() {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const opts = (lst) => {
    let options = [];
    const vals = Object.keys(lst);
    vals.forEach((ele) => {
      options.push(<option value={ele}>{state.list[ele]}</option>);
    });
    return options;
  };

  const handleClick = () => {
    Axios.get(`http://localhost/audio-demo.php?id=${state.selected}`).then(
      (res) => {
        const { loc } = res.data;
        setState({
          ...state,
          result: "",
        });
        setState({
          ...state,
          status: `Playing ${state.list[state.selected]}`,
          result: `http://localhost/audios/${loc}`,
        });
      }
    );

    fetch(`http://localhost/audio-demo.php?id=${state.selected}`)
      .then((res) => res.json())
      .then((data) => {
        const { loc } = data;
        setState({
          ...state,
          result: "",
        });
        setState({
          ...state,
          status: `Playing ${state.list[state.selected]}`,
          result: `http://localhost/audios/${loc}`,
        });
      });
  };

  const handlePlay = () => {
    setState({
      ...state,
      status: `Playing ${state.list[state.selected]}`,
    });
  };

  const handlePause = () => {
    setState({
      ...state,
      status: `Paused ${state.list[state.selected]}`,
    });
  };
  console.log(state);
  return (
    <div>
      <form onSubmit={handleClick}>
        Songs:
        <select name="selected" onChange={handleChange} value={state.selected}>
          {opts(state.list)}
        </select>
        <input type="submit" value="Submit" />
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
