import React from "react";
import "./styles/usefullinks.css";

export default function UsefulLinks() {
  return (
    <>
      <div className="game-container-informations useful-links-container">
        <h2 className="section-info">Useful links</h2>
        <div className="useful-links-block">
          <div className="useful-links-section">
            <p className="useful-links">Trailers</p>
            <p className="useful-links">
              <a href="https://www.youtube.com" target="_blank">
                Trailer 1
              </a>
            </p>
            <p className="useful-links">
              <a href="https://www.youtube.com" target="_blank">
                Trailer 2
              </a>
            </p>
            <p className="useful-links">
              <a href="https://www.youtube.com" target="_blank">
                Trailer 3
              </a>
            </p>
          </div>
          <div className="useful-links-section">
            <p className="useful-links">Gameplay Trailer</p>
            <p className="useful-links">
              <a href="https://www.youtube.com" target="_blank">
                Gameplay 1
              </a>
            </p>
            <p className="useful-links">
              <a href="https://www.youtube.com" target="_blank">
                Gameplay 1
              </a>
            </p>
          </div>
          <div className="useful-links-section">
            <p className="useful-links">Buy the game</p>
            <p className="useful-links">
              <a
                href="https://store.playstation.com/en-us/concept/10005114"
                target="_blank"
              >
                PS Store
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
