import React, { useState } from "react";

const INITIAL_STATE = {
  number: "",
  result: "",
  datum: {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
  },
};

function NumberFC() {
  const changeHandler = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const clickHandler = (event) => {
    event.preventDefault();
    // Axios
    Axios.get(`http://localhost/number-demo.php?number=${state.number}`).then(
      (res) => {
        const { result } = res.data;
        setState({
          ...state,
          result: result,
        });
      }
    );

    //fetch api
    fetch(`http://localhost/number-demo.php?number=${state.number}`)
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        setState({
          ...state,
          result: result,
        });
      });
  };

  const [state, setState] = useState({ ...INITIAL_STATE });

  const { number, result } = state;

  return (
    <div>
      <form onSubmit={clickHandler}>
        <input
          name="number"
          type="number"
          value={number}
          min="0"
          max="10"
          onChange={changeHandler}
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
      {result}
    </div>
  );
}

export default NumberFC;
