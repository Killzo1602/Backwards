import React, { useEffect, useState } from "react";
import GameComponent from "./GameComponent";

export default function GameLoader(props) {
  const [games, setGames] = useState([""]);
  useEffect(() => {
    loadGames().then((value) => setGames(value));
  }, []);

  const pb = props.pb;

  function loadGames() {
    const records = pb.collection("games").getFullList();
    console.log(records);

    return records;
  }

  return (
    // Query from database from games and load them for each game load into gameObject
    // For each game object create game component and pass gameobject as props
    <>
      {games.map((game, i) => (
        <GameComponent
          gameName={game.name}
          releaseDate={game.release_date}
          gameDeveloper={game.game_developer}
          gameImage={
            "http://127.0.0.1:8090/api/files/u30lsz38u8u3l23/" +
            game.id +
            "/" +
            game.game_image
          }
        ></GameComponent>
      ))}
    </>
  );
}
