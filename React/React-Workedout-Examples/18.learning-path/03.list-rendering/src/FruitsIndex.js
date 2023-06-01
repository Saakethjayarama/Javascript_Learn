import React, { Component } from "react";
function AppFunction() {
  const fruits = [
    "Apple",
    "Banana",
    "Pineapple",
    "Pear",
    "Strawberry",
    "Orange",
    "Watermelon",
    "Guava",
  ];
  return (
    <div className="App">
      <h1>Fruits</h1>
      {fruits.map((fruit, index) => {
        return <p key={index}>{fruit}</p>;
      })}
    </div>
  );
}

export class AppClass extends Component {
  render() {
    const fruits = [
      "Apple",
      "Banana",
      "Pineapple",
      "Pear",
      "Strawberry",
      "Orange",
      "Watermelon",
      "Guava",
    ];
    return (
      <div className="App">
        <h1>Fruits</h1>
        {/* Using index as the */}
        {fruits.map((fruit, index) => {
          return <p key={index}>{fruit}</p>;
        })}
      </div>
    );
  }
}

export default AppClass;

/**
 *  When to use Index as key
 * * Items in your list do not have a unique id
 * * The list is static list and do not change
 * * If the list will never be re-ordered or filtered
 */

/**
 * ? Workaround
 * * Hash any property of the list and use it as key
 */

/**
 * ! Issues using index as keys
 * https://codepen.io/gopinav/pen/gQpepq
 */
