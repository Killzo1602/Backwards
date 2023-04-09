import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WebsiteLogo from "../components/Logo.png";
import "../components/styles/navbar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={WebsiteLogo} alt="Backward Games" className="logo"></img>
        <div>
          <input
            type="text"
            placeholder="search games"
            className="search-box"
          ></input>
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
