import React, { Component } from "react";

export class MonumentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monument: "Tajmahal.jpg",
      result: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      monument: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: this.state.monument,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select
            name="monument"
            onChange={this.handleChange}
            value={this.state.monument}
          >
            <option value="Tajmahal.jpg">Tajmahal</option>
            <option value="Qutb.jpg">Qutb</option>
            <option value="Konark.jpg">Konark</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        {this.state.result === "" ? null : (
          <img src={require("../../assets/" + this.state.result).default} />
        )}
      </div>
    );
  }
}

export default MonumentClass;
