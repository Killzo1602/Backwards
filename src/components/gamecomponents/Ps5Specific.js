import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUp,
  faSun,
  faCircleCheck,
  faCircleXmark,
  faJetFighterUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Ps5Specific() {
  return (
    <>
      <div className="game-container-informations">
        <h2 className="left-column-text">PS5 Specific</h2>
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon icon={faCircleUp} /> Updated for Playstation 5
          </p>
          <p className="check-mark">
            <FontAwesomeIcon icon={faCircleCheck} /> YES
          </p>
        </div>
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon icon={faJetFighterUp} /> Better on PS5
          </p>
          <p className="check-mark">
            <FontAwesomeIcon icon={faCircleCheck} /> YES
          </p>
        </div>
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon icon={faStar} /> Playstation 5 version
          </p>
          <p className="x-mark">
            <FontAwesomeIcon icon={faCircleXmark} /> NO
          </p>
        </div>
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon icon={faSun} /> Ray Tracing
          </p>
          <p className="x-mark">
            <FontAwesomeIcon icon={faCircleCheck} /> NO
          </p>
        </div>
      </div>
    </>
  );
}
