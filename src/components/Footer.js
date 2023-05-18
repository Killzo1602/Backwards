import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faTiktok,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import ".//styles/footer.css";

export default function Footer() {
  return (
    <>
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
          <a className="footer-element" href="https://www.instagram.com">
            <FontAwesomeIcon
              style={{ marginRight: "1rem" }}
              icon={faInstagramSquare}
            />
            Instagram
          </a>
        </div>
        <div className="footer-column">
          <h1 className="footer-element footer-title">Useful Links</h1>
          <a className="footer-element" href="/">
            Home Page
          </a>
          <a className="footer-element" href="home-page">
            news
          </a>
          <a className="footer-element" href="/about">
            About
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
