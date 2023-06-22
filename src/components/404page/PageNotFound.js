import React from "react";

import "./style/notfound.css";

export default function PageNotFound() {
  return (
    <>
      <div className="not-found-container">
        <h1 className="not-found-h1">404</h1>
      </div>
      <div className="not-found-box-text">
        <div className="not-found-box">
          <p className="not-found-p">
            The page you are looking for might have been removed, had its name
            changed or is temporary unavilable
          </p>
        </div>
        <div className="not-found-box ">
          <a href="/" className="not-found-a not-found-box-a">
            <p>HOMEPAGE</p>
          </a>
        </div>
      </div>
    </>
  );
}
