import React from "react";

import "./style/Hamburger.css";

export default function Hamburger(props) {
  return (
    <div className="hamburger-menu">
      <div id="first-line" className="line"></div>
      <div id="second-line" className="line"></div>
    </div>
  );
}
