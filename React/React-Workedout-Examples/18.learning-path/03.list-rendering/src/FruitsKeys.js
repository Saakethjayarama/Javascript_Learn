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
      {fruits.map((fruit) => {
        return <p key={fruit}>{fruit}</p>;
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
        {/* Since all fruits unique so they can be keys */}

        {fruits.map((fruit) => {
          return <p key={fruit}>{fruit}</p>;
        })}
      </div>
    );
  }
}

export default AppClass;
