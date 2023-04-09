import React from "react";
import GameplayBlure from "./TestImages/GameCover.png";
import GameCoverImage from "./TestImages/cover.jpg";
import ".//styles/gameimage.css";

export default function GameImage() {
  return (
    <>
      <div className="game-display">
        <img
          src={GameplayBlure}
          alt="Gameplay"
          className="gameplay-blure"
        ></img>
        <img
          src={GameCoverImage}
          alt="Game Cover"
          className="game-cover-image"
        ></img>
      </div>
    </>
  );
}
