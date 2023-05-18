import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUp,
  faSun,
  faCircleCheck,
  faCircleXmark,
  faJetFighterUp,
  faStar,
  faTv,
  faUpRightAndDownLeftFromCenter,
  faEye,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";

export default function BaseGame() {
  return (
    <>
      <div className="game-container-informations">
        <h2 className="left-column-text">Base game detail</h2>

        {/* section */}
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon icon={faTv} /> 4K
          </p>
          <p className="check-mark">
            <FontAwesomeIcon icon={faCircleCheck} /> YES
          </p>
        </div>
        {/* section */}
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon icon={faEye} /> Ray Tracing
          </p>
          <p className="check-mark">
            <FontAwesomeIcon icon={faCircleCheck} /> YES
          </p>
        </div>
        {/* section */}
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon
              icon={faUpRightAndDownLeftFromCenter}
              style={{ marginRight: "4px" }}
            />
            Supersampling
          </p>
          <p className="check-mark">
            <FontAwesomeIcon icon={faCircleCheck} /> YES
          </p>
        </div>
        {/* section */}
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon icon={faGamepad} /> GOFY Edition
          </p>
          <p className="x-mark">
            <FontAwesomeIcon icon={faCircleXmark} /> NO
          </p>
        </div>
        <div className="game-section-informations">
          <p>
            <FontAwesomeIcon icon={faPlaystation} /> Sony Exclusive
          </p>
          <p className="x-mark">
            <FontAwesomeIcon icon={faCircleCheck} /> NO
          </p>
        </div>
        {/* section */}
      </div>
    </>
  );
}
