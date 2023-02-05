import React from "react";
import logo from "../components/test.jpg";
import "../components/styles/gamestyles.css";

export default function GameComponent() {
  return (
    <div className="game-container">
      <div className="game-image">
        <img src={logo} alt="test" className="game-img"></img>
      </div>

      <div className="game-details">
        <h2>Borderlands 3</h2>
        <p>Release date: September 13, 2019 </p>
        <p>Game details</p>
      </div>
    </div>
  );
}
