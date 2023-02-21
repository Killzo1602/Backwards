import React from "react";
import { Link } from "react-router-dom";
import GameLoader from "../components/GameLoader";
import SlideShow from "../components/SlideShow";
import ".//styles/home.css";

export default function Home(props) {
  const pb = props.pb;
  return (
    <>
      <div className="header">
        <p className="test-text">
          <Link to="/games">Games</Link>
        </p>
      </div>
      <div>
        <SlideShow></SlideShow>
      </div>
      <div className="game-row">
        <div className="title-container">
          <h1 className="row-tags">NEW GAME RELEASE</h1>
        </div>
        <div className="game-list">
          <GameLoader pb={pb}></GameLoader>
        </div>
      </div>
      {/*PS PLUS GAMES*/}
      <div className="game-row">
        <h1 className="row-tags">PS PLUS GAMES</h1>
        <div className="game-list"></div>
      </div>
      {/* Hot now*/}
      <div className="game-row">
        <h1 className="row-tags">Hot now</h1>
        <div className="game-list"></div>
      </div>
      {/*Comming soon*/}
      <div className="game-row">
        <h1 className="row-tags">Comming soon</h1>
        <div className="game-list"></div>
      </div>
    </>
  );
}
