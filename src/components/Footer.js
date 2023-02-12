import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faTiktok,
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
