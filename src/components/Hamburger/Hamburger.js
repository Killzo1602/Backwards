import React, { useState } from "react";

import "./style/Hamburger.css";
import { click } from "@testing-library/user-event/dist/click";

export default function Hamburger(props) {

  const [clicked, setClicked] = useState(false);


  return (
    <div className={clicked ? "hamburger-menu clicked" : "hamburger-menu"} onClick={() => setClicked(!clicked)}>
      <div id="first-line" className="line"></div>
      <div id="second-line" className="line"></div>
    </div>
  );
}
