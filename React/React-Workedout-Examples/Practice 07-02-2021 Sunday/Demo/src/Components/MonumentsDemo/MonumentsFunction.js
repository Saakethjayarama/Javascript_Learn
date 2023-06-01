import React, { useState } from "react";
import Card from "../Card/Card";

function MonumentsFunction() {
  const [state, setState] = useState({
    category: "getMonuments.php",
    result: [],
  });

  const handleChange = (event) => {
    setState({
      ...state,
      category: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://codersclub.in/rest/" + state.category)
      .then((res) => res.json())
      .then((data) => {
        setState({
          ...state,
          result: data,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="category" onChange={handleChange} value={state.category}>
          <option value="getMonuments.php">Monumets</option>
          <option value="getFruits.php">Fruits</option>
          <option value="getGroceries.php">Groceries</option>
          <option value="getVegetables.php">Vegetables</option>
          <option value="getDiaryProducts.php">Diary Products</option>
        </select>
        <input type="submit" value="Submit" />
        <br />
        {state.result.map((child, index) => {
          return (
            <Card image={child.loc} description={child.name} key={index} />
          );
        })}
      </form>
    </div>
  );
}

export default MonumentsFunction;
