import React from 'react';
import slider1 from "../../../Images/1.png";
import slider2 from "../../../Images/2.png";
import slider3 from "../../../Images/3.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg max-w-full mx-auto h-[12rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem]">
      <Slider {...settings}>
        <div>
          <img
            src={slider1}
            alt="slide 1"
            className="w-full h-[12rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={slider2}
            alt="slide 2"
            className="w-full h-[12rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={slider3}
            alt="slide 3"
            className="w-full h-[12rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] object-cover rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
}
  