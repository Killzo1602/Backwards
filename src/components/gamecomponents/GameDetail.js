import React from "react";
import "./styles/gamedetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faGlobe,
  faGun,
} from "@fortawesome/free-solid-svg-icons";

export default function GameDetail() {
  return (
    <>
      <div className="game-container-informations">
        <h2 className="section-info">Game Details</h2>
        <div className="game-details-box">
          <div>
            <p className="game-details-text">
              <FontAwesomeIcon icon={faGun} style={{ marginRight: "5px" }} />
              Genre
            </p>
          </div>
          <p className="game-details-text">
            <FontAwesomeIcon
              icon={faBarsProgress}
              style={{ marginRight: "5px" }}
            />
            Developer
          </p>
          <p className="game-details-text">
            <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "5px" }} />
            Publisher
          </p>
        </div>
      </div>
    </>
  );
}
