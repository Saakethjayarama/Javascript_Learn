import React, { Component } from "react";

export class SelectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "BNG",
      result: "",
    };
  }

  cities = {
    BNG: "Bangalore",
    MNG: "Mangalore",
    MYS: "Mysore",
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      city: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const selected = this.cities[this.state.city];
    this.setState({
      ...this.state,
      result: selected + " Selected",
    });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select
            name="city"
            onChange={this.handleChange}
            value={this.state.city}
          >
            <option value="BNG">Bangalore</option>
            <option value="MNG">Mangalore</option>
            <option value="MYS">Mysore</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default SelectClass;
