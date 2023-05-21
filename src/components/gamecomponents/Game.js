import React from "react";
import "./styles/gameinformations.css";
import Ps5Specific from "./Ps5Specific";
import BaseGame from "./BaseGame";
import GameDetail from "./GameDetail";
import AboutGame from "./AboutGame";
import GamePerformance from "./GamePerformance";
import UsefulLinks from "./UsefulLinks";

export default function Game() {
  return (
    <>
      <div className="container-location">
        <div className="left-columns">
          <Ps5Specific></Ps5Specific>
          <BaseGame></BaseGame>
        </div>
        <div className="right-columns">
          <GameDetail></GameDetail>
          <AboutGame></AboutGame>
          <GamePerformance></GamePerformance>
          <UsefulLinks></UsefulLinks>
          {/* USEFUL LINKS
TRAILERS - GAMEPLAY - LINK TO STORE
*/}
        </div>
      </div>
    </>
  );
}
