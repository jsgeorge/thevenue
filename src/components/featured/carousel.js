import React from "react";
import Slider from "react-slick";
import slide1 from "../../../src/resources/images/concert_one.jpg";
import slide2 from "../../../src/resources/images/concert_two.jpg";
import slide3 from "../../../src/resources/images/concert_three.jpg";
import slide4 from "../../../src/resources/images/concert_four.jpg";
import slide5 from "../../../src/resources/images/concert_five.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        background: "gray",
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide4})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
