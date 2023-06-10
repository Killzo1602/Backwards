import React, { useState } from "react";
import "./styles/gamelistsearch.css";
import Genre from "./Genre";
import Developer from "./Developer";
import Resolution from "./Resolution";
import Publisher from "./Publisher";

export default function GameListSearch(props) {
  const [filters, setFilters] = useState([]);

  const addFilter = (newFilters) => {
    setFilters([...filters, newFilters]);
    console.log("Called with new filters");
    console.log(newFilters);
  };

  const removeFilter = (label) => {
    let newFilters = [];
    filters.forEach(() => {
      newFilters.push(
        filters.filter((e) => {
          return e.label === label;
        })
      );
    });
    setFilters([...filters, newFilters]);
  };

  return (
    <>
      <div className="game-list-box">
        <div className="game-list-search-box">
          <div>
            <legend className="game-list-legend">Title</legend>
            <form>
              <input
                type="text"
                id="Game"
                className="game-list-search-box"
              ></input>
            </form>
          </div>
          <div className="game-list-components">
            <legend className="game-list-legend">Resolution + FPS </legend>
            <Resolution
              pb={props.pb}
              addFilterCallback={addFilter}
              removeFilterCallback={removeFilter}
            />
          </div>
          <div className="game-list-components">
            <legend className="game-list-legend">Genre </legend>
            <Genre />
          </div>
          <div className="game-list-components">
            <legend className="game-list-legend">Developer </legend>
            <Developer pb={props.pb} />
          </div>
          <div className="game-list-components">
            <legend className="game-list-legend">Publisher </legend>
            <Publisher />
          </div>

          <div>
            <button className="game-list-search-button">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
