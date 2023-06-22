import React from "react";

import "./style/about.css";

export default function About() {
  return (
    <>
      <div className="about-main-container">
        <div className="about-main-box">
          <h1 className="about-h1">About Backward-Games</h1>
          <p className="about-p">
            Backward-Games is a user-friendly platform specifically crafted to
            simplify the process of discovering PlayStation 4 games that are
            compatible with PlayStation 5. Our primary focus is to provide
            detailed data on their performance on the console, a crucial aspect
            often lacking comprehensive information. While most PlayStation 4
            games are playable on the PS5, the comparative performance details
            with both the PlayStation 4 and PlayStation 4 Pro remain scarce, we
            want to ensure that you have the necessary information to make
            decisions about your gaming experience.
          </p>
        </div>
        <div className="about-main-box">
          <h1 className="about-h1">Backward-Games Story</h1>
          <p className="about-p">
            I started this project in early 2023 as a fresh graduated computer
            science student with a desire to take on a big project. Since I
            bought a PS5 and wanted to play games at the best resolution, I
            spent a lot of time searching for the right game specifications.
            That's why I decided to create a website that provides a wide range
            of recent and old games. The website is built using ReactJS and has
            a database that holds all the games. I worked on it in my spare time
            while having a regular job. The website will be regularly updated
            with newly announced games, although it may take some time to
            include all the games. If you're looking for a specific game, feel
            free to contact us.
          </p>
        </div>
        <div className="about-main-box">
          <h1 className="about-h1">How Can I Contribute?</h1>
          <p className="about-p">
            To contribute to this project, the only available methods are
            through email or by directly contacting us via social media. There
            won't be a direct access option to the project. We appreciate your
            understanding and encourage you to reach out to us via email or
            social media for any contributions or inquiries.
          </p>
        </div>
        <div className="about-main-box">
          <h1 className="about-h1">Credits</h1>
          <p className="about-p">
            Special thanks and credit for the initial performance information
            goes to{" "}
            <a href="https://www.resetera.com/threads/ps5-backwards-compatibility-all-ps4-games-with-benefits.322747/">
              Liabe Brave at Resetera
            </a>{" "}
            for their incredible data compilation. I would also like to
            acknowledge the inspiration I drew from{" "}
            <a href="https://www.backwards-compatible.com">
              backwards.compatible.com
            </a>{" "}
            for this website. However, I discovered that the last update on that
            website was in 2021. Rest assured, this website will be regularly
            updated with new game releases, PS Plus games, and upcoming titles
            to ensure you stay up-to-date with the latest gaming content.
          </p>
        </div>
        <div className="about-main-box">
          <h1 className="about-h1">How Can I Donate?</h1>
          <p className="about-p">
            You can support this website and receive updates by using the{" "}
            <a href="https://www.patreon.com">Patreon</a> (for any new about the
            website), you have the option of making a one-time payment through
            platforms like <a href="https://www.patreon.com">Buy me a coffee</a>
            {". "}
            Additionally, sharing this website with your friends is another way
            to help us foster a vibrant community.
          </p>
        </div>
      </div>
    </>
  );
}
