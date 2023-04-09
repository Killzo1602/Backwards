import React from "react";
import { Slide } from "react-slideshow-image";
import "../components/styles/slideshow.css";
import CoverTestImage from "../cover.jpg";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const SlideShow = () => {
  return (
    <Slide autoplay={false}>
      <div className="slide-show">
        <div>
          <span>Muie cu ciment</span>
        </div>
      </div>
      <div className="slide-show">
        <div>
          <span>Muie cu ciment</span>
        </div>
      </div>
      <div className="slide-show">
        <div>
          <span>Muie cu ciment</span>
        </div>
      </div>
    </Slide>
  );
};

export default SlideShow;
