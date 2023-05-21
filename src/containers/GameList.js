import React from "react";
import ".//styles/games.css";
import PocketBase from "pocketbase";
import GameLoader from "../components/GameLoader";
import GameListNav from "../components/gamelist/GameListNav";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function GameList() {
  return (
    <>
      <GameListNav></GameListNav>
      <div className="games-home-page">
        <div className="game-list">
          <GameLoader pb={pb}></GameLoader>
        </div>
      </div>
    </>
  );
}
