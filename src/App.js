import "./App.css";
import GameComponent from "./components/GameComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import PocketBase from "pocketbase";
import GameLoader from "./components/GameLoader";

const pb = new PocketBase("http://127.0.0.1:8090");

function App() {
  return (
    <>
      <section className="notification-message">
        <div className="notification-message-text">
          <strong className="notification-message-text">Buy me a beer</strong>-{" "}
          <a
            href="https://www.patreon.com"
            className="notification-message-text"
          >
            Patreon
          </a>{" "}
          ----
        </div>
      </section>

      <nav className="navigation-bar">
        <div className="navigation-element">
          <a href="localhost:3000" className="navigation-element">
            <h1>Backwards a to z</h1>
          </a>
        </div>
        <div className="navigation-">
          <button>Press here</button>
        </div>
      </nav>
      <div className="header">
        <p className="test-text">
          SIMPLE TEXT JUST TESTING SOME SHIT WILL CHANGE LATER
        </p>
      </div>
      {/* NEW GAME RELEASE */}
      <div className="game-row">
        <div className="title-container">
          <h1 className="row-tags">NEW GAME RELEASE</h1>
        </div>
        <div className="game-list"></div>
      </div>
      {/*PS PLUS GAMES*/}
      <div className="game-row">
        <h1 className="row-tags">PS PLUS GAMES</h1>
        <div className="game-list">
          <GameLoader pb={pb}></GameLoader>
        </div>
      </div>
      {/* Hot now*/}
      <div className="game-row">
        <h1 className="row-tags">Hot now</h1>
        <div className="game-list"></div>
      </div>
      {/*Comming soon*/}
      <div className="game-row">
        <h1 className="row-tags">Comming soon</h1>
        <div className="game-list">
          <img src="http://127.0.0.1:8090/api/files/u30lsz38u8u3l23/9claghj2av5hp2d/test_i2bkAalNSs.jpg"></img>
        </div>
      </div>

      <div className="footer">
        <div className="footer-column">
          <h1 className="footer-element footer-title">Social Media</h1>
          <a className="footer-element" href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitterSquare} />
            Twitter
          </a>
          <a className="footer-element" href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookSquare} />
            Facebook
          </a>
          <a className="footer-element" href="https://www.tiktok.com">
            <FontAwesomeIcon icon={faTiktok} />
            TikTok
          </a>
        </div>
        <div className="footer-column">
          <a className="footer-element" href="home-page">
            Home Page
          </a>
          <a className="footer-element" href="home-page">
            news
          </a>
          <a className="footer-element" href="home-page">
            haha
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          suscipit!
        </p>
      </div>
    </>
  );
}

export default App;
