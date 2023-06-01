import React, { useState } from "react";

const INITIAL_STATE = {
  current: 0,
};

export default function FunApp() {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleIncrement = () => {
    setState({
      ...state,
      current: parseInt(state.current) + 1,
    });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleDecrement = () => {
    setState({
      ...state,
      current: state.current - 1,
    });
  };

  return (
    <div>
      <input
        type="number"
        name="current"
        value={state.current}
        onChange={handleChange}
      />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
    </div>
  );
}
