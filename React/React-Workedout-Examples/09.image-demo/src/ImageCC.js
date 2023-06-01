import React, { Component } from "react";

import ajanta from "./images/ajanta.jpg";
import golgumbaz from "./images/golgumbaz.jpg";
import hampi from "./images/hampi.jpg";
import lalbagh from "./images/lalbagh.jpg";
import mysorepalace from "./images/mysorepalace.jpg";
import tajmahal from "./images/tajmahal.jpg";
import vidhanasoudha from "./images/vidhanasoudha.jpg";

const INITIAL_STATE = {
  monument: mysorepalace,
  result: "",
};

export default class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: this.state.monument,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          Monument:{" "}
          <select name="monument" onChange={this.handleChange}>
            <option value={mysorepalace}>Mysore Palace</option>
            <option value={vidhanasoudha}>Vidhana Soudha</option>
            <option value={lalbagh}>Lalbagh</option>
            <option value={golgumbaz}>Gol Gumbaz</option>
            <option value={hampi}>Hampi</option>
            <option value={tajmahal}>Taj Mahal</option>
            <option value={ajanta}>Ajanta</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <div className="imaze">
          {this.state.result === "" ? (
            ""
          ) : (
            <img src={this.state.result} alt="selectedone" />
          )}
        </div>
      </div>
    );
  }
}
