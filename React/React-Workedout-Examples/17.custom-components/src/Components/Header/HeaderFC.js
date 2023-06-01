import React from "react";
import "./header.css";

function Header(props) {
  const { logo, items } = props;
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

export default Header;
