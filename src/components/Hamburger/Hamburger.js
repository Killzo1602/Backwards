import React from "react";

import "./style/Hamburger.css";

export default function Hamburger(props) {
  return (
    <>
      <div>
        <div className="dropdown">
          <button className="link">Hamburgir</button>
          <div className="dropdown-menu">Dropdown content</div>
        </div>
      </div>
    </>
  );
}
