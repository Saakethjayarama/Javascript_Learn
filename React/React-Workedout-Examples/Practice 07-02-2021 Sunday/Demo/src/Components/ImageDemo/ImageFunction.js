import React, { useState, useEffect } from "react";

function ImageFunction() {
  const [state, setState] = useState({
    monuments: [],
    monument: "",
    result: "",
  });

  useEffect(() => {
    fetch("http://codersclub.in/rest/getMonuments.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setState({
          ...state,
          monuments: data,
          monument: data[0].loc,
        });
      });
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      monument: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      ...state,
      result: state.monument,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="monument" onChange={handleChange} value={state.monument}>
          {state.monuments.map((monument, index) => (
            <option value={monument.loc} key={index}>
              {monument.name}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
      {state.result === "" ? null : <img src={state.result} />}
    </div>
  );
}

export default ImageFunction;
