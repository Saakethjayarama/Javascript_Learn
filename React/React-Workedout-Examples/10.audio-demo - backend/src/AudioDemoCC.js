import Axios from "axios";
import React, { Component } from "react";

const INITIAL_STATE = {
  selected: "BA",
  list: {
    BA: "Baarish",
    BR: "Breakup",
    BU: "Bulleya",
    IK: "Ikvaari",
    SN: "Sanam",
  },
  status: "",
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
    Axios.get(`http://localhost/audio-demo.php?id=${this.state.selected}`).then(
      (res) => {
        const { loc } = res.data;
        this.setState({
          ...this.state,
          result: "",
        });
        this.setState({
          ...this.state,
          status: `Playing ${this.state.list[this.state.selected]}`,
          result: `http://localhost/audios/${loc}`,
        });
      }
    );

    fetch(`http://localhost/audio-demo.php?id=${this.state.selected}`)
      .then((res) => res.json())
      .then((data) => {
        const { loc } = data;
        this.setState({
          ...this.state,
          result: "",
        });
        this.setState({
          ...this.state,
          status: `Playing ${this.state.list[this.state.selected]}`,
          result: `http://localhost/audios/${loc}`,
        });
      });
  };

  handlePause = () => {
    this.setState({
      ...this.state,
      status: `Paused ${this.state.list[this.state.selected]}`,
    });
  };

  handlePlay = () => {
    this.setState({
      ...this.state,
      status: `Playing ${this.state.list[this.state.selected]}`,
    });
  };

  opts(lst) {
    let options = [];
    const vals = Object.keys(lst);
    vals.forEach((ele) => {
      options.push(<option value={ele}>{this.state.list[ele]}</option>);
    });
    return options;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          Songs:
          <select
            name="selected"
            onChange={this.handleChange}
            value={this.state.selected}
          >
            {this.opts(this.state.list)}
          </select>
          <input type="submit" value="submit" />
          <br />
        </form>
        {this.state.result === "" ? (
          ""
        ) : (
          <audio
            controls={true}
            autoPlay={true}
            onPause={this.handlePause}
            onPlay={this.handlePlay}
          >
            <source src={this.state.result} />
          </audio>
        )}
        <p>{this.state.status}</p>
      </div>
    );
  }
}
