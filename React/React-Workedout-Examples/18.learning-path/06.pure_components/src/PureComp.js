import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  // Does shallow comparision doesnt re-render on same value change
  // Used for performance boost
  render() {
    console.log("Pure component render");
    return <div>Pure Component {this.props.sec}</div>;
  }
}
