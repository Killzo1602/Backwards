import React from "react";
import Collapsible from "../components/Collapsible";
import "./styles/gamesearch.css";

export default function GameSearch() {
  return (
    <>
      <div className="search-component">
        <div className="game-search-button">
          <input type="text"></input>
          <button>Search</button>
        </div>
        <div className="game-search-filter"></div>
      </div>
    </>
  );
}
