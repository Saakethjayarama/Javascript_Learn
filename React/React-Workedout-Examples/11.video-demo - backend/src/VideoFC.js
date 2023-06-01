import Axios from "axios";
import React, { useState } from "react";

const INITIAL_STATE = {
  selected: "A",
  result: "",
  status: "",
  list: {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
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
      result: "",
    });

    Axios.get(`http://localhost/video-demo.php?id=${state.selected}`).then(
      (res) => {
        const { loc } = res.data;
        setState({
          ...state,
          result: `http://localhost/videos/${loc}`,
          status: `Playing ${state.result}`,
        });
      }
    );

    fetch(`http://localhost/video-demo.php?id=${state.selected}`)
      .then((res) => res.json())
      .then((data) => {
        const { loc } = data;
        setState({
          ...state,
          result: `http://localhost/videos/${loc}`,
          status: `Playing ${state.result}`,
        });
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
      options.push(<option value={vid}>{vid}</option>);
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
        <input type="submit" value="submit" />
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
