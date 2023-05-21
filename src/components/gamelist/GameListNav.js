import React from "react";
import "./styles/gamelistnav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function GameListNav() {
  return (
    <>
      <div className="game-list-nav">
        <div className="game-list-text">
          <a href="/">
            <FontAwesomeIcon icon={faHouse} />
            Home
          </a>
        </div>
        <h2>Random game</h2>
      </div>
    </>
  );
}