import React, { Component } from "react";
import Axios from "axios";

const INITIAL_STATE = {
  selected: "MP",
  monuments: {
    MP: "Mysore Palace",
    VS: "Vidhana Soudha",
    LB: "Lal Bagh",
    GL: "Golgumbaz",
    HP: "Hampi",
    TM: "Taj Mahal",
    AJ: "Ajanta",
  },
  result: "",
};

class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleClick = (event) => {
    event.preventDefault();

    Axios.get(`http://localhost/image-demo.php?id=${this.state.selected}`).then(
      (res) => {
        const { loc } = res.data;
        this.setState({
          ...this.state,
          result: loc,
        });
      }
    );

    fetch(`http://localhost/image-demo.php?id=${this.state.selected}`)
      .then((res) => res.json())
      .then((data) => {
        const { loc } = data;
        this.setState({
          ...this.state,
          result: loc,
        });
      });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  options(mons) {
    const monKeys = Object.keys(mons);
    let opts = [];
    monKeys.forEach((mon) => {
      opts.push(<option value={mon}>{this.state.monuments[mon]}</option>);
    });
    return opts;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          Monument:{" "}
          <select name="monument" name="selected" onChange={this.handleChange}>
            {this.options(this.state.monuments)}
          </select>
          <button onClick={this.handleClick}>Submit</button>
        </form>
        {this.state.result === "" ? (
          ""
        ) : (
          <img
            src={`http://localhost/images/${this.state.result}`}
            alt="selectedone"
          />
        )}
      </div>
    );
  }
}

export default ClassApp;
