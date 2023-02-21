import React from "react";
import { Slide } from "react-slideshow-image";
import "../components/styles/slideshow.css";
import CoverTestImage from "../cover.jpg";

const SlideShow = (props) => {
  const image = props.gameImage;

  return (
    <Slide indicators={true}>
      <div className="slide-show">
        <img src={CoverTestImage} alt="test" className="slide-show-image"></img>
      </div>
      <div className="slide-show">
        <img src={CoverTestImage} alt="test" className="slide-show-image"></img>
      </div>
      <div className="slide-show">
        <img src={CoverTestImage} alt="test" className="slide-show-image"></img>
      </div>
      <div className="slide-show">
        <img src={CoverTestImage} alt="test" className="slide-show-image"></img>
      </div>
    </Slide>
  );
};

export default SlideShow;
