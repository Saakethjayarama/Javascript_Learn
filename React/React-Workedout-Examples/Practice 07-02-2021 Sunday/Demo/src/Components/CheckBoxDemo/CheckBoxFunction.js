import React, { useState } from "react";

function CheckBoxFunction() {
  const [state, setState] = useState({
    languages: [],
    result: "",
  });

  const handleChange = (event) => {
    console.log(event.target.checked + event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = state.languages.join(", ");
    data += " Selected";
    console.log(data);
    setState({
      ...state,
      result: data,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="languages"
          value={"C"}
          onChange={handleChange}
          checked={state.languages.indexOf("C") === -1 ? false : true}
        />{" "}
        C<br />
        <input
          type="checkbox"
          name="languages"
          value={"C++"}
          onChange={handleChange}
          checked={state.languages.indexOf("C++") === -1 ? false : true}
        />{" "}
        C++
        <br />
        <input
          type="checkbox"
          name="languages"
          value={"Java"}
          onChange={handleChange}
          checked={state.languages.indexOf("Java") === -1 ? false : true}
        />{" "}
        Java
        <br />
        <input
          type="checkbox"
          name="languages"
          value={"Python"}
          onChange={handleChange}
          checked={state.languages.indexOf("Python") === -1 ? false : true}
        />{" "}
        Python
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div>{state.result}</div>
    </div>
  );
}

export default CheckBoxFunction;
