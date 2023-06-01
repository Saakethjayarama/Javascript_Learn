import React, { Component } from "react";

export class DateCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  componentDidMount() {
    const { day, month, year, format } = this.props;

    let date = format;
    date = date.replace("dd", this.converter(day));
    date = date.replace("mm", this.converter(month));
    date = date.replace("yyyy", year);

    this.setState({
      ...this.state,
      value: date,
    });
  }

  converter(no) {
    no = no + "";
    return no.length == 2 ? no : "0" + no;
  }

  render() {
    return (
      <div>
        {this.state.value ? (
          <input type="text" disabled value={this.state.value} />
        ) : null}
      </div>
    );
  }
}

export default DateCC;
