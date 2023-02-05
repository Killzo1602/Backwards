import React from "react";
import logo from "../components/test.jpg";
import "../components/styles/gamestyles.css";

export default function GameComponent(props) {
  const gameImage = props.gameImage;
  const gameName = props.gameName;
  const releaseDate = props.releaseDate;
  const gameDetails = props.gameDetails;
  return (
    <div className="game-container">
      <div className="game-image">
        <img src={gameImage} alt="test" className="game-img"></img>
      </div>

      <div className="game-details">
        <h2>{props.gameName}</h2>
        <p>Release Date: {props.releaseDate}</p>
        <p>{props.gameDetails}</p>
      </div>
    </div>
  );
}
