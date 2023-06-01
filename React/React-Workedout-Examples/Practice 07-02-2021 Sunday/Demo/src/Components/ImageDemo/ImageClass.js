import React, { Component } from "react";

export class ImageClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monuments: [],
      monument: "",
      result: "",
    };
  }

  componentDidMount() {
    fetch("http://codersclub.in/rest/getMonuments.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        this.setState({
          ...this.state,
          monuments: data,
          monument: data[0].loc,
        });
      });
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      monument: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: this.state.monument,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select
            name="monument"
            onChange={this.handleChange}
            value={this.state.monument}
          >
            {this.state.monuments.map((monument, index) => (
              <option value={monument.loc} key={index}>
                {monument.name}
              </option>
            ))}
          </select>
          <input type="submit" value="Submit" />
        </form>
        {this.state.result === "" ? null : <img src={this.state.result} />}
      </div>
    );
  }
}

export default ImageClass;
