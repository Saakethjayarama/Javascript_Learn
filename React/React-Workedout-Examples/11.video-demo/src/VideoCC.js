import React, { Component, useState } from "react";
import "./App.css";

import a from "./videos/a.mp4";
import b from "./videos/b.mp4";
import c from "./videos/c.mp4";
import d from "./videos/d.mp4";
import e from "./videos/e.mp4";

const INITIAL_STATE = {
  selected: a,
  result: "",
  status: "",
  list: {
    A: a,
    B: b,
    C: c,
    D: d,
    E: e,
  },
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
      result: this.state.selected,
      status: `Playing ${this.state.result}`,
    });
  };

  handlePlay = () => {
    this.setState({
      ...this.state,
      status: `Playing ${this.state.result}`,
    });
  };

  handlePause = () => {
    this.setState({
      ...this.state,
      status: `Paused ${this.state.result}`,
    });
  };

  opts(list) {
    const vids = Object.keys(list);
    let options = [];
    vids.forEach((vid) => {
      options.push(<option value={this.state.list[vid]}>{vid}</option>);
    });
    return options;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <select name="selected" onChange={this.handleChange}>
            {this.opts(this.state.list)}
          </select>
          <input type="submit" value="Submit" />
          <br />
        </form>

        {this.state.result === "" ? (
          ""
        ) : (
          <video
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            controls={true}
            autoPlay={true}
          >
            <source src={this.state.result} />
          </video>
        )}
        <br />
        {this.state.status === "" ? "" : `${this.state.status}`}
      </div>
    );
  }
}
