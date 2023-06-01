import React, { Component } from "react";

export class StudentSearchClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usn: "",
      student: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      usn: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://codersclub.in/rest/searchByUSN.php?usn=" + this.state.usn)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const res = [];
        for (const [key, value] of Object.entries(data)) {
          res.push({ key, value });
        }
        this.setState({
          ...this.state,
          student: res,
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="usn"
            placeholder="USN"
            onChange={this.handleChange}
            value={this.state.usn}
          />
          <input type="submit" value="Submit" />
          <br />
          <table border="1">
            {this.state.student.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.key}</td>
                  <td>{value.value}</td>
                </tr>
              );
            })}
          </table>
        </form>
      </div>
    );
  }
}

export default StudentSearchClass;
