import React, { useState } from "react";

function CalculatorFunction() {
  const [state, setState] = useState({
    operand1: "",
    operand2: "",
    operator: "",
    result: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://codersclub.in/rest/Calculator.php?operand1=${state.operand1}&operand2=${state.operand2}&operator=${state.operator}`;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        setState({
          ...state,
          result: result,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Operand1:{" "}
        <input
          type="text"
          name="operand1"
          onChange={handleChange}
          value={state.operand1}
        />{" "}
        <br />
        Operand2:{" "}
        <input
          type="text"
          name="operand2"
          onChange={handleChange}
          value={state.operand2}
        />{" "}
        <br />
        <input
          type="radio"
          name="operator"
          value="+"
          onChange={handleChange}
          checked={state.operator === "+"}
        />{" "}
        +<br />
        <input
          type="radio"
          name="operator"
          value="-"
          onChange={handleChange}
          checked={state.operator === "-"}
        />{" "}
        -<br />
        <input
          type="radio"
          name="operator"
          value="x"
          onChange={handleChange}
          checked={state.operator === "x"}
        />{" "}
        x<br />
        <input
          type="radio"
          name="operator"
          value="/"
          onChange={handleChange}
          checked={state.operator === "/"}
        />{" "}
        /<br />
        <input
          type="radio"
          name="operator"
          value="%"
          onChange={handleChange}
          checked={state.operator === "%"}
        />{" "}
        %<br />
        <input type="submit" value="Submit" />
      </form>
      <div>{state.result}</div>
    </div>
  );
}

export default CalculatorFunction;
