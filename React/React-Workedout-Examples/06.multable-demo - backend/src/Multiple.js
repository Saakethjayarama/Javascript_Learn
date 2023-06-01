import React, { Component } from "react";

function FunMultiple(props) {
  console.log(props.data);
  return (
    <div>
      {props.data.map((el, index) => {
        return (
          <p key={index}>
            {el[0]} x {el[1]} = {el[2]}
          </p>
        );
      })}
    </div>
  );
}

class ClassMultiple extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((el, index) => {
          return (
            <p key={index}>
              {el[0]} x {el[1]} = {el[2]}
            </p>
          );
        })}
      </div>
    );
  }
}

export default ClassMultiple;
