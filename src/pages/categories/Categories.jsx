import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categoriesData } from "./categoriesData";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

// const categoriesData = [
//   {
//     id: 1,
//     img: categoryImg1,
//     name: "kategorisdata.name1", // Translation key
//     size: "kategorisdata.size1", // Translation key
//   },
//   {
//     id: 2,
//     img: categoryImg2,
//     name: "kategorisdata.name2",
//     size: "kategorisdata.size2",
//   },
//   {
//     id: 3,
//     img: categoryImg3,
//     name: "kategorisdata.name3",
//     size: "kategorisdata.size3",
//   },
//   {
//     id: 4,
//     img: categoryImg4,
//     name: "kategorisdata.name4",
//     size: "kategorisdata.size4",
//   },
//   {
//     id: 5,
//     img: categoryImg5,
//     name: "kategorisdata.name5",
//     size: "kategorisdata.size5",
//   },
// ];

const Categories = () => {
  const { t } = useTranslation();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1280px] mx-auto py-10 overflow-hidden lg:px-12 sm:px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-[35px] font-semibold xl:text-[28px] lg:text-[22px]">
          {t("kategories.kategoriya")}
        </h1>
        <Link
          to={"/"}
          className="text-[#49c3f2] text-[19px] lg:text-[16px] font-semibold underline"
        >
          {t("kategories.hammasiniko'rish")}
        </Link>
      </div>

      <div className="slider-container mt-7 xl:mt-3">
        <Slider {...settings}>
          {categoriesData?.map((val) => (
            <div key={val.id} className="xl:grid xl:grid-cols-3">
              <Link to={`/products/${val.id}`}>
                <div className="rounded-[20px] mx-auto grid content-between w-[90%] h-[380px] xl:h-[280px] border-2 p-5 bg-white border-[#e7e7e7] border-solid relative">
                  <h3 className="text-[19px] xl:text-[16px] xl:leading-5 text-black font-semibold">
                    {t(val.name)}
                  </h3>
                  <img
                    src={val.img}
                    className="h-[200px] xl:h-[150px] w-full my-5 xl:my-2"
                  />
                  <p>{t(val.size)}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
