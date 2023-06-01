import React, { Component } from "react";
import Card from "../Card/Card";

export class MonumentsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "getMonuments.php",
      result: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      category: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://codersclub.in/rest/" + this.state.category)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          result: data,
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select
            name="category"
            onChange={this.handleChange}
            value={this.state.category}
          >
            <option value="getMonuments.php">Monumets</option>
            <option value="getFruits.php">Fruits</option>
            <option value="getGroceries.php">Groceries</option>
            <option value="getVegetables.php">Vegetables</option>
            <option value="getDiaryProducts.php">Diary Products</option>
          </select>
          <input type="submit" value="Submit" />
          <br />
          {this.state.result.map((child, index) => {
            return (
              <Card image={child.loc} description={child.name} key={index} />
            );
          })}
        </form>
      </div>
    );
  }
}

export default MonumentsClass;
