import React, { useState } from "react";
import Axios from "axios";

function SelectFC() {
  const [state, setState] = useState({
    qualification: "",
    result: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Axios

    Axios.get(
      `http://localhost/qualification-demo.php?qualification=${state.qualification}`
    ).then((res) => {
      const { result } = res.data;
      setState({
        ...state,
        result,
      });
    });

    //fetch
    fetch(
      `http://localhost/qualification-demo.php?qualification=${state.qualification}`
    )
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        setState({
          ...state,
          result,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Qualification:{" "}
        <select
          name="qualification"
          onChange={handleChange}
          value={state.qualification}
        >
          <option value="">--Select--</option>
          <option value="BE-CS">BE-CS</option>
          <option value="BE-ME">BE-ME</option>
          <option value="BSc">BSc</option>
          <option value="BCom">BCom</option>
        </select>
        <br />
        <button name="submit">Submit</button>
      </form>
      <br />
      {state.result}
    </div>
  );
}

export default SelectFC;
