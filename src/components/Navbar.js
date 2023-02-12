import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WebsiteLogo from "../components/Logo.png";
import "../components/styles/navbar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={WebsiteLogo} alt="Backward Games" className="logo"></img>
        </Link>
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
