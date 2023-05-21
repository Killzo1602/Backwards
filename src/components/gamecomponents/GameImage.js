import React from "react";
import GameplayBlure from "./TestImages/GameCover.png";
import GameCoverImage from "./TestImages/cover.jpg";
import ".//styles/gameimage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function GameImage() {
  return (
    <>
      {/*ADD RATING  LATER */}
      <div className="game-display">
        <img
          src={GameplayBlure}
          alt="Gameplay"
          className="gameplay-blure"
        ></img>
        <div className="game-image-details">
          <img
            src={GameCoverImage}
            alt="Game Cover"
            className="game-cover-image"
          ></img>
          <h2 className="game-image-text">GAME NAME</h2>
        </div>
      </div>
    </>
  );
}
