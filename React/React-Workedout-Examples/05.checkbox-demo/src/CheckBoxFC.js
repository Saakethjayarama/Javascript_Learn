import React, { useState } from "react";

function CheckBoxFC() {
  const [state, setState] = useState({
    languages: [],
    result: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = state.languages.join(", ") + " Selected";
    setState({
      ...state,
      result,
    });
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      setState({
        ...state,
        languages: [...state.languages, event.target.value],
      });
    } else {
      const index = state.languages.indexOf(event.target.value);
      console.log(index);
      const newArray = [
        ...state.languages.slice(0, index),
        ...state.languages.slice(index + 1),
      ];
      setState({
        ...state,
        languages: newArray,
      });
      console.log(newArray);
    }
  };
  console.log(state);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Languages: <br />
        <input
          type="checkbox"
          name="language"
          value="C"
          onChange={handleChange}
          checked={state.languages.indexOf("C") !== -1}
        />{" "}
        C<br />
        <input
          type="checkbox"
          name="language"
          value="CPP"
          onChange={handleChange}
          checked={state.languages.indexOf("CPP") !== -1}
        />{" "}
        C++
        <br />
        <input
          type="checkbox"
          name="language"
          value="JAVA"
          onChange={handleChange}
          checked={state.languages.indexOf("JAVA") !== -1}
        />{" "}
        Java
        <br />
        <input
          type="checkbox"
          name="language"
          value="PY"
          onChange={handleChange}
          checked={state.languages.indexOf("PY") !== -1}
        />{" "}
        Python
        <br />
        <input type="submit" value="Submit" />
      </form>
      {state.result}
    </div>
  );
}

export default CheckBoxFC;
