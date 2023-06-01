import React, { Component } from "react";

export class StudentByGenderClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      result: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      gender: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const url =
      "http://codersclub.in/rest/listByGender.php?gender=" + this.state.gender;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          ...this.state,
          result: data,
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="radio"
            name="gender"
            value="M"
            onChange={this.handleChange}
            checked={this.state.gender === "M"}
          />{" "}
          Male
          <br />
          <input
            type="radio"
            name="gender"
            value="F"
            onChange={this.handleChange}
            checked={this.state.gender === "F"}
          />{" "}
          Female
          <br />
          <input type="submit" value="Submit" />
        </form>
        <table border="1">
          <tbody>
            {this.state.result.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.usn}</td>
                  <td>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.phoneNumber}</td>
                  <td>{student.email}</td>
                  <td>{student.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentByGenderClass;
