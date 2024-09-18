import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { productsData } from "./productsData";
import React, { Component } from "react";
import Slider from "react-slick";
import ProductModal from "./ProductModal";
import { useTranslation } from "react-i18next";

const Product = () => {
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
    <div className="max-w-[1280px] mx-auto py-10 xl:py-0 overflow-hidden lg:px-12 sm:px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-[35px] xl:text-[28px] font-semibold lg:text-[22px]">
          {t("productsdata.products")}
        </h1>
        <Link
          to={"/"}
          className="text-[#49c3f2] text-[19px] font-semibold underline lg:text-[16px]"
        >
          {t("productsdata.hammasiniko'rish")}
        </Link>
      </div>

      <div className="slider-container mt-7 xl:mt-3">
        <Slider {...settings}>
          {productsData?.map((val) => (
            <div key={val.id} className="grid grid-cols-4 gap-8">
              <div className="rounded-[20px] mx-auto grid content-between w-[90%] h-[420px] xl:h-[300px] border-[1px] p-3 bg-white border-[#e7e7e7] border-solid relative">
                <div className="border-[#e7e7e7] border-solid relative rounded-[20px] border-[1px] p-3 xl:p-0">
                  <Link to={"/notfound"}>
                    <img
                      src={val.productsImg}
                      className="h-[180px] w-[70%] xl:h-[130px] mx-auto my-5"
                    />
                  </Link>

                  <Link to={"/salom"}>
                    <FaRegHeart className="w-[25px] h-[22px] absolute top-6 right-5 xl:top-4 xl:right-3 text-[#007aff]" />
                  </Link>
                </div>
                <h3 className="text-[16px] tracking-[.1em] line-clamp-[1] my-2 xl:mb-0 xl:text-[12px] opacity-60 text-black font-bold font-montserrat-bold">
                  {val.aboutProducts}
                </h3>
                <p className="text-[20px] font-bold mb-2 xl:text-[14px] xl:m-0 opacity-80">
                  {val.productsPrice}
                </p>
                <ProductModal />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/*  */}

      <div className="slider-container mt-14">
        <div className="flex xl:gap-5 justify-between gap-5 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1">
          {productsData?.map((val) => (
            <div
              key={val.id}
              className="w-[90%] [&:nth-child(n+5)]:hidden lg:w-full"
            >
              <div className="rounded-[20px] mx-auto grid xl:h-[300px] content-between w-[100%] h-[420px] border-[1px] p-3 border-[#e7e7e7] border-solid relative">
                <div className="border-[#e7e7e7] border-solid relative rounded-[20px] border-[1px] p-3 xl:p-0">
                  <Link to={"/salom"}>
                    <img
                      src={val.productsImg}
                      className="h-[180px] w-[70%] xl:w-1/2 xl:h-[120px] mx-auto my-5"
                    />
                  </Link>

                  <Link to={"/salom"}>
                    <FaRegHeart className="w-[25px] xl:w-[15px] h-[22px] xl:h-[15px] absolute top-6 right-5 text-[#007aff]" />
                  </Link>
                </div>

                <h3 className="text-[16px] tracking-[.1em] line-clamp-[1] my-2 xl:mb-0 xl:text-[12px] md:text-[16px] opacity-60 text-black font-bold font-montserrat-bold">
                  {val.aboutProducts}
                </h3>

                <p className="text-[20px] font-bold mb-2 xl:text-[14px] md:text-[16px] xl:m-0 opacity-80">
                  {val.productsPrice}
                </p>

                <button>
                  <ProductModal />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
