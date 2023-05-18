import React from "react";
import "./styles/gameperformance.css";

export default function GamePerformance() {
  return (
    <>
      <div className="game-container-informations">
        <h2 className="section-info">Game Performance</h2>
        <h2 className="platform-text">Playstation 5</h2>
        <div className="game-details-box">
          <div className="info-table">
            <div className="resolution">Resolution</div>
            <div className="frame-rate">Frame rate</div>
            <div className="pos-resolution">4K</div>
            <div className="pos-frame-rate">60 fps lock</div>
            <div className="pos-resolution">1440P</div>
            <div className="pos-frame-rate">120 FPS</div>
            <div className="pos-resolution">1080P</div>
            <div className="pos-frame-rate">30 FPS</div>
          </div>
        </div>
        <h2 className="platform-text">Playstation 4</h2>
        <div className="game-details-box">
          <div className="info-table">
            <div className="resolution">Resolution</div>
            <div className="frame-rate">Frame rate</div>
            <div className="pos-resolution">4K</div>
            <div className="pos-frame-rate">60 fps lock</div>
            <div className="pos-resolution">1440P</div>
            <div className="pos-frame-rate">120 FPS</div>
            <div className="pos-resolution">1080P</div>
            <div className="pos-frame-rate">30 FPS</div>
          </div>
        </div>
      </div>
    </>
  );
}
