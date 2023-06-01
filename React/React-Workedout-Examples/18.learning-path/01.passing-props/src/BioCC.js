import React, { Component } from "react";

export default class BioClass extends Component {
  render() {
    console.log(this.props);
    const { name, age } = this.props;
    return (
      <div>
        Hi my name is {name} and i am {age} years old
      </div>
    );
  }
}
