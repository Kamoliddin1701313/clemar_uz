import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// scroll images import
import bigscrolimg1 from "../../assets/images/big-scrol-img1.png";
import bigscrolimg2 from "../../assets/images/big-scrol-img2.png";

const LargePictureCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-green-400 max-w-[1280px] mx-auto py-16">
      <div className="slider-container max-w-[1200px] mx-auto">
        <Slider {...settings}>
          <div className="h-[400px] rounded-[10px]">
            <img
              src={bigscrolimg1}
              alt="big-scrol-img1"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <div className="h-[400px] rounded-[10px]">
            <img
              src={bigscrolimg2}
              alt="big-scrol-img2"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <div className="h-[400px] rounded-[10px]">
            <img
              src={bigscrolimg1}
              alt="big-scrol-img1"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <div className="h-[400px] rounded-[10px]">
            <img
              src={bigscrolimg2}
              alt="big-scrol-img2"
              className="w-full h-full rounded-[10px]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LargePictureCarousel;
