import React from "react";
import "./styles/gameinformations.css";
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
} from "@fortawesome/free-solid-svg-icons";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";

export default function GameInformations() {
  return (
    <>
      <div className="container-location">
        <div className="left-columns">
          <div className="game-container-informations">
            <h2>PS5 Specific</h2>
            <div className="game-section-informations">
              <p>
                <FontAwesomeIcon icon={faCircleUp} /> Updated for Playstation 5
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} /> YES
              </p>
            </div>
            {/* section */}
            <div className="game-section-informations">
              <p>
                <FontAwesomeIcon icon={faStar} /> Playstation 5 version
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleXmark} /> NO
              </p>
            </div>
            {/* section */}
            <div className="game-section-informations">
              <p>
                <FontAwesomeIcon icon={faSun} /> Ray Tracing
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} /> YES
              </p>
            </div>
          </div>
          {/* section */}
          <div className="game-container-informations">
            <h2>Base game detail</h2>
            <div className="game-section-informations">
              <p>
                <FontAwesomeIcon icon={faJetFighterUp} /> Better on PS5
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} /> YES
              </p>
            </div>
            {/* section */}
            <div className="game-section-informations">
              <p>
                <FontAwesomeIcon icon={faTv} /> 4K
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} /> YES
              </p>
            </div>
            {/* section */}
            <div className="game-section-informations">
              <p>
                <FontAwesomeIcon icon={faCircleUp} /> Ray Tracing
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} /> YES
              </p>
            </div>
            {/* section */}
            <div className="game-section-informations">
              <p>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />{" "}
                Supersampling
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} /> YES
              </p>
            </div>
            {/* section */}
            <div className="game-section-informations">
              <p>
                <FontAwesomeIcon icon={faPlaystation} /> Sony Exclusive
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} /> YES
              </p>
            </div>
            {/* section */}
          </div>
        </div>
        <div className="right-columns">
          <div className="game-container-informations">
            <h2 className="game-informations">Game Details</h2>
            <div className="game-details-box">
              <p>Genre</p>
              <p>Developer</p>
              <p>Publisher</p>
            </div>
          </div>
          <div className="game-container-informations"></div>
          <div className="game-container-informations"></div>
        </div>
      </div>
    </>
  );
}
