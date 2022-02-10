import React from "react";
import Slider from "react-slick";

export default function SlideShow({slides}){
  let settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <Slider {...settings}>
      {slides}
    </Slider>
  );
}