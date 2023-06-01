import React, { useState } from "react";
import Axios from "axios";

const INITIAL_STATE = {
  selected: "MP",
  monuments: {
    MP: "Mysore Palace",
    VS: "Vidhana Soudha",
    LB: "Lal Bagh",
    GL: "Golgumbaz",
    HP: "Hampi",
    TM: "Taj Mahal",
    AJ: "Ajanta",
  },
  result: "",
};

export default function FunApp() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleClick = () => {
    Axios.get(`http://localhost/image-demo.php?id=${state.selected}`).then(
      (res) => {
        const { loc } = res.data;
        setState({
          ...state,
          result: loc,
        });
      }
    );

    fetch(`http://localhost/image-demo.php?id=${state.selected}`)
      .then((res) => res.json())
      .then((data) => {
        const { loc } = data;
        setState({
          ...state,
          result: loc,
        });
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  console.log(state);
  const options = (mons) => {
    const monKeys = Object.keys(mons);
    let opts = [];
    monKeys.forEach((mon) => {
      opts.push(<option value={mon}>{state.monuments[mon]}</option>);
    });
    return opts;
  };

  return (
    <div className="App">
      Monument:{" "}
      <select name="monument" name="selected" onChange={handleChange}>
        {options(state.monuments)}
      </select>
      <button onClick={handleClick}>Submit</button>
      <div className="imaze">
        {state.result === "" ? (
          ""
        ) : (
          <img
            src={`http://localhost/images/${state.result}`}
            alt="selectedone"
          />
        )}
      </div>
    </div>
  );
}
