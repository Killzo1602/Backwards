import React from "react";
import ".//styles/games.css";
import PocketBase from "pocketbase";
import GameLoader from "../components/GameLoader";
import GameListSearch from "../components/gamelist/GameListSearch";

export default function GameList(props) {
  return (
    <>
      <div className="games-home-page">
        <GameListSearch pb={props.pb} />
        <div className="game-list">
          <GameLoader pb={props.pb}></GameLoader>
        </div>
      </div>
    </>
  );
}
