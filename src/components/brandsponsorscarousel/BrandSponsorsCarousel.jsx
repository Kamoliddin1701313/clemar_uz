import services1 from "../../assets/images/BrandSponsorsCarousel/services1.png";
import services2 from "../../assets/images/BrandSponsorsCarousel/services2.png";
import services3 from "../../assets/images/BrandSponsorsCarousel/services3.png";
import services4 from "../../assets/images/BrandSponsorsCarousel/services4.png";
import caruselimg1 from "../../assets/images/BrandSponsorsCarousel/caruselimg1.png";
import caruselimg2 from "../../assets/images/BrandSponsorsCarousel/caruselimg2.png";
import caruselimg3 from "../../assets/images/BrandSponsorsCarousel/caruselimg3.png";
import caruselimg4 from "../../assets/images/BrandSponsorsCarousel/caruselimg4.png";
import caruselimg5 from "../../assets/images/BrandSponsorsCarousel/caruselimg5.png";
import caruselimg6 from "../../assets/images/BrandSponsorsCarousel/caruselimg6.png";
import caruselimg7 from "../../assets/images/BrandSponsorsCarousel/caruselimg7.png";
import caruselimg8 from "../../assets/images/BrandSponsorsCarousel/caruselimg8.png";
import caruselimg9 from "../../assets/images/BrandSponsorsCarousel/caruselimg9.png";
import caruselimg10 from "../../assets/images/BrandSponsorsCarousel/caruselimg10.png";
import caruselimg11 from "../../assets/images/BrandSponsorsCarousel/caruselimg11.png";
import caruselimg12 from "../../assets/images/BrandSponsorsCarousel/caruselimg12.png";
import caruselimg13 from "../../assets/images/BrandSponsorsCarousel/caruselimg13.png";
import caruselimg14 from "../../assets/images/BrandSponsorsCarousel/caruselimg14.png";
import caruselimg15 from "../../assets/images/BrandSponsorsCarousel/caruselimg15.png";
import caruselimg16 from "../../assets/images/BrandSponsorsCarousel/caruselimg16.png";
import caruselimg17 from "../../assets/images/BrandSponsorsCarousel/caruselimg17.png";
import caruselimg18 from "../../assets/images/BrandSponsorsCarousel/caruselimg18.png";
import React, { Component } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const BrandSponsorsCarousel = () => {
  const { t } = useTranslation();

  //   const scrollimg = [
  //     { img: caruselimg1 },
  //     { img: caruselimg2 },
  //     { img: caruselimg3 },
  //     { img: caruselimg4 },
  //     { img: caruselimg5 },
  //     { img: caruselimg6 },
  //     { img: caruselimg7 },
  //     { img: caruselimg8 },
  //     { img: caruselimg9 },
  //     { img: caruselimg10 },
  //     { img: caruselimg11 },
  //     { img: caruselimg12 },
  //     { img: caruselimg13 },
  //     { img: caruselimg14 },
  //     { img: caruselimg15 },
  //     { img: caruselimg16 },
  //     { img: caruselimg17 },
  //     { img: caruselimg18 },
  //   ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    // initialSlide: 0,
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
    <div className="max-w-[1280px] mx-auto py-10 overflow-x-hidden-hidden lg:px-12 sm:px-6 lg:py-5">
      <div className="flex justify-between items-center">
        <h1 className="text-[35px] xxl:text-[24px] xl:text-[19px] lg:text-[22px] font-semibold py-5">
          {t("brand.brandname")}
        </h1>
      </div>

      <div className="w-[80%] xl:w-full lg:w-full xl:gap-3 grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-3">
        <div className="lg:grid gap-2 flex lg:grid-cols-1">
          <img
            src={services1}
            alt="services1"
            className="w-[6vw] xl:w-3/5 rounded-[7px] lg:w-3/4 md:w-full lg:mx-auto"
          />
          <p className="font-semibold text-[18px] xxl:text-[13px] md:text-[16px] font-sans">
          {t("brand.brandxizmatlari")}
          </p>
        </div>

        <div className="lg:grid gap-2 flex lg:grid-cols-1">
          <img
            src={services2}
            alt="services2"
            className="w-[6vw] xl:w-3/5 rounded-[7px] lg:w-3/4 md:w-full lg:mx-auto"
          />
          <p className="font-semibold text-[18px] xxl:text-[13px] md:text-[16px] font-sans">
          {t("brand.brandqismi")}
          </p>
        </div>

        <div className="lg:grid gap-2 flex lg:grid-cols-1">
          <img
            src={services3}
            alt="services3"
            className="w-[6vw] xl:w-3/5 rounded-[7px] lg:w-3/4 md:w-full top-0 lg:mx-auto"
          />
          <p className="font-semibold text-[18px] xxl:text-[13px] md:text-[16px] font-sans">
          {t("brand.brandijara")}
          </p>
        </div>

        <div className="lg:grid gap-2 flex lg:grid-cols-1">
          <img
            src={services4}
            alt="services4"
            className="w-[6vw] xl:w-3/5 rounded-[7px] lg:w-3/4 md:w-full lg:mx-auto"
          />
          <p className="font-semibold text-[18px] xxl:text-[13px] md:text-[16px] font-sans">
          {t("brand.brandaksessuari")}
          </p>
        </div>
      </div>

      <div className="slider-container h-[160px] xxl:h-[140px] md:h-[220px]">
        <h1 className="text-[35px] font-semibold my-5 xxl:text-[24px] lg:text-[22px]">
        {t("brand.brandishonchi")}
        </h1>

        <Slider
          {...settings}
          className="flex justify-between pr-5 overflow-hidden"
        >
          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg1}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg2}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg3}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg4}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg5}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg6}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg7}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg8}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg9}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg10}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg11}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg12}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg13}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg14}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg15}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg16}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg17}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>

          <div className="py-4 pl-5 w-full flex justify-center h-[160px] xxl:h-[140px] md:h-[200px]">
            <img
              src={caruselimg18}
              className="w-[100%] px-20 xxl:px-10 rounded-[30px] py-10 xxl:py-6 h-full bg-[#49c3f2]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BrandSponsorsCarousel;
