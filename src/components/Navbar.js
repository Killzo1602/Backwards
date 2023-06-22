import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import largeWebsiteLogo from "../components/Logo/Logo_full.png";
import smallWebsiteLogo from "../components/Logo/Logo_small.png";
import "../components/styles/navbar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <picture>
            <source media="(max-width:850px)" srcSet={smallWebsiteLogo} />
            <img src={largeWebsiteLogo} alt="Backward Games" className="logo" />
          </picture>
          {/* <img src={WebsiteLogo} alt="Backward Games" className="logo"></img> */}
        </Link>
        <div>
          {/* <input
            type="text"
            placeholder="search games"
            className="search-box"
          ></input>
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button> */}
          <Hamburger></Hamburger>
        </div>
      </div>
    </>
  );
}

export default Navbar;
