import React from "react";
import "./styles/gamedetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faDisplay,
  faDollarSign,
  faGlobe,
  faGun,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";

export default function GameDetail() {
  return (
    <>
      <div className="game-container-informations">
        <h2 className="section-info">Game Details</h2>
        <div className="game-details-box">
          <div className="game-details-poisiton">
            <p className="game-details-text">
              <FontAwesomeIcon icon={faGun} style={{ marginRight: "5px" }} />
              Genre
            </p>
            <p className="game-details-text">Developer Name</p>
          </div>
          <div>
            <p className="game-details-text">
              <FontAwesomeIcon
                icon={faUserGear}
                style={{ marginRight: "5px" }}
              />
              Developer
            </p>
            <p className="game-details-text">Developer Name</p>
          </div>
          <div>
            <p className="game-details-text">
              <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "5px" }} />
              Publisher
            </p>
            <p className="game-details-text">Publisher Name</p>
          </div>
        </div>
        <div className="--game-details-box">
          <div className="game-details-poisiton">
            <p className="game-details-text">
              <FontAwesomeIcon
                icon={faDisplay}
                style={{ marginRight: "5px" }}
              />
              Release date
            </p>
            <p className="game-details-text">Date</p>
          </div>
          <div className="game-details-poisiton">
            <p className="game-details-text">
              <FontAwesomeIcon
                icon={faDollarSign}
                style={{ marginRight: "5px" }}
              />
              Release date
            </p>
            <p className="game-details-text">Price</p>
          </div>
        </div>
      </div>
    </>
  );
}
