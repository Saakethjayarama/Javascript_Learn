import React, { Component } from "react";

export class HeaderCC extends Component {
  render() {
    const { logo, items } = this.props;
    return (
      <div className="Header">
        <div className="Header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Header__nav">
          <div className="Header__nav__items">
            {items.map((value, index) => (
              <div className="Header__nav__item" key={index}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderCC;
