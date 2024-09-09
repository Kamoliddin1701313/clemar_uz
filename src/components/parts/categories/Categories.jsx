import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categoriesMock } from "./categoriesMock";
import Slider from "react-slick";

const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-[1280px] bg-emerald-600 mx-auto py-10 px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[35px] font-semibold font-montserrat-medium">
          Kategoriyalar
        </h1>
        <Link
          to={"/"}
          className="text-[#49c3f2] text-[19px] font-semibold font-montserrat-medium underline"
        >
          Hammasini ko'rish
        </Link>
      </div>
      <div className="slider-container mt-7">
        <Slider {...settings} className="flex items-center justify-between">
          {categoriesMock?.map((val) => (
            <Link to={"/salom"} key={val.id}>
              <div className="rounded-[20px] grid content-between w-[90%] h-[380px] border-2 p-5 bg-white border-[#e7e7e7] border-solid relative">
                <h3 className="text-[19px] text-black font-semibold font-montserrat-medium">
                  {val.name}
                </h3>
                <img src={val.img} className="h-[200px] w-full my-5" />
                <p>{val.size}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
