import Axios from "axios";
import React, { Component } from "react";

const INITIAL_STATE = {
  selected: "A",
  result: "",
  status: "",
  list: {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
  },
};

class ClassApp extends Component {
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
      result: "",
    });

    Axios.get(`http://localhost/video-demo.php?id=${this.state.selected}`).then(
      (res) => {
        const { loc } = res.data;
        this.setState({
          ...this.state,
          result: `http://localhost/videos/${loc}`,
          status: `Playing ${this.state.result}`,
        });
      }
    );

    fetch(`http://localhost/video-demo.php?id=${this.state.selected}`)
      .then((res) => res.json())
      .then((data) => {
        const { loc } = data;
        this.setState({
          ...this.state,
          result: `http://localhost/videos/${loc}`,
          status: `Playing ${this.state.result}`,
        });
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
      options.push(<option value={vid}>{vid}</option>);
    });
    return options;
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.handleClick}>
          Videos:{" "}
          <select name="selected" onChange={this.handleChange}>
            {this.opts(this.state.list)}
          </select>
          <input type="submit" value="submit" />
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

export default ClassApp;
