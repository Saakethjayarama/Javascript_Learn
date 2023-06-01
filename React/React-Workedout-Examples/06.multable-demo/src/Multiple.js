import React, { Component } from "react";

function FunMultiple(props) {
  const multiple = () => {
    let entries = [];
    for (let i = 1; i <= 10; i++) {
      entries.push(
        <p key={i}>
          {props.no} x {i} = {props.no * i}
        </p>
      );
    }

    return entries;
  };

  return <div>{multiple()}</div>;
}

class ClassMultiple extends Component {
  constructor(props) {
    super(props);
    this.multiple = this.multiple.bind(this);
    this.state = {
      props: props,
    };
  }

  multiple = () => {
    let entries = [];
    for (let i = 1; i <= 10; i++) {
      entries.push(
        <p key={i}>
          {this.state.props.no} x {i} = {this.state.props.no * i}
        </p>
      );
    }

    return entries;
  };

  render() {
    console.log(this.state);

    return <div>{this.multiple()}</div>;
  }
}

export default ClassMultiple;
