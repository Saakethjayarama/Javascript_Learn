import Axios from "axios";
import React, { useState } from "react";

const INITIAL_STATE = {
  current: 0,
};

export default function FunApp() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleIncrement = () => {
    const data = { val: state.current, mode: "INC" };

    Axios.post(`http://localhost/increment-decrement-demo.php`, data)
      .then((res) => {
        const { result } = res.data;

        setState({
          current: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleDecrement = () => {
    const data = { val: state.current, mode: "DEC" };

    Axios.post(`http://localhost/increment-decrement-demo.php`, data).then(
      (res) => {
        const { result } = res.data;

        setState({
          current: result,
        });
      }
    );

    fetch(`http://localhost/increment-decrement-demo.php`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;

        setState({
          current: result,
        });
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
