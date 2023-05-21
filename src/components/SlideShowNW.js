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
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <Slide autoplay={false}>
      <div className="slide-show">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span>Muie cu ciment</span>
        </div>
      </div>
      <div className="slide-show">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <div>
            <span>Muie cu ciment</span>
          </div>
        </div>
        <div className="slide-show"></div>
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <div>
            <span>Muie cu ciment</span>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default SlideShow;
