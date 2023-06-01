import React, { Component } from "react";

export class CheckBoxClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      result: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.checked + event.target.value);
    if (event.target.checked) {
      this.setState({
        ...this.state,
        languages: [...this.state.languages, event.target.value],
      });
    } else {
      const index = this.state.languages.indexOf(event.target.value);
      console.log(index);
      const newArray = [
        ...this.state.languages.slice(0, index),
        ...this.state.languages.slice(index + 1),
      ];
      this.setState({
        ...this.state,
        languages: newArray,
      });
      console.log(newArray);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = this.state.languages.join(", ");
    data += " Selected";
    console.log(data);
    this.setState({
      ...this.state,
      result: data,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="checkbox"
            name="languages"
            value={"C"}
            onChange={this.handleChange}
            checked={this.state.languages.indexOf("C") === -1 ? false : true}
          />{" "}
          C<br />
          <input
            type="checkbox"
            name="languages"
            value={"C++"}
            onChange={this.handleChange}
            checked={this.state.languages.indexOf("C++") === -1 ? false : true}
          />{" "}
          C++
          <br />
          <input
            type="checkbox"
            name="languages"
            value={"Java"}
            onChange={this.handleChange}
            checked={this.state.languages.indexOf("Java") === -1 ? false : true}
          />{" "}
          Java
          <br />
          <input
            type="checkbox"
            name="languages"
            value={"Python"}
            onChange={this.handleChange}
            checked={
              this.state.languages.indexOf("Python") === -1 ? false : true
            }
          />{" "}
          Python
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default CheckBoxClass;
