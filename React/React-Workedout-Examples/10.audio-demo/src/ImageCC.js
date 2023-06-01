import React, { Component, useState } from "react";

import baarish from "./audios/Baarish.mp3";
import breakup from "./audios/Breakup.mp3";
import bulleya from "./audios/Bulleya.mp3";
import ikvaari from "./audios/Ikvaari.mp3";
import sanam from "./audios/Sanam.mp3";

const INITIAL_STATE = {
  selected: "",
  result: "",
  status: "",
};

class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: "",
    });
    this.setState({
      ...this.state,
      result: this.state.selected,
      status: `Playing ${this.state.selected}`,
    });
  };

  handlePlay = () => {
    this.setState({
      ...this.state,
      status: `Playing ${this.state.selected}`,
    });
  };

  handlePause = () => {
    this.setState({
      ...this.state,
      status: `Paused ${this.state.selected}`,
    });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.handleClick}>
          Songs:
          <select
            name="selected"
            onChange={this.handleChange}
            value={this.state.selected}
          >
            <option value={baarish}>Baarish</option>
            <option value={breakup}>Breakup</option>
            <option value={bulleya}>Bulleya</option>
            <option value={ikvaari}>IkVaaria</option>
            <option value={sanam}>Sanam</option>
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

export default ClassApp;
