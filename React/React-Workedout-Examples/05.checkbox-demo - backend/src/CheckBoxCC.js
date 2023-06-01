import React, { Component } from "react";
import Axios from "axios";

export class CheckBoxCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [],
      result: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //axios
    Axios.post(`http://localhost/checkbox-demo.php`, this.state.languages)
      .then((res) => {
        const selectedLanguages = res.data;

        let selectedString = "";

        selectedLanguages.forEach((ele) => {
          selectedString += ele + " ";
        });

        this.setState({
          ...this.state,
          result: selectedString,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //post
    fetch(`http://localhost/checkbox-demo.php`, {
      method: "POST",
      body: JSON.stringify(this.state.languages),
      headers: {
        "Content-Type": "application/json;  charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const selectedLanguages = data;

        let selectedString = "";

        selectedLanguages.forEach((ele) => {
          selectedString += ele + " ";
        });

        this.setState({
          ...this.state,
          result: selectedString,
        });
      });
  };

  handleChange = (event) => {
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Languages: <br />
          <input
            type="checkbox"
            name="language"
            value="C"
            onChange={this.handleChange}
            checked={this.state.languages.indexOf("C") !== -1}
          />{" "}
          C<br />
          <input
            type="checkbox"
            name="language"
            value="CPP"
            onChange={this.handleChange}
            checked={this.state.languages.indexOf("CPP") !== -1}
          />{" "}
          C++
          <br />
          <input
            type="checkbox"
            name="language"
            value="JAVA"
            onChange={this.handleChange}
            checked={this.state.languages.indexOf("JAVA") !== -1}
          />{" "}
          Java
          <br />
          <input
            type="checkbox"
            name="language"
            value="PY"
            onChange={this.handleChange}
            checked={this.state.languages.indexOf("PY") !== -1}
          />{" "}
          Python
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.result}
      </div>
    );
  }
}

export default CheckBoxCC;
