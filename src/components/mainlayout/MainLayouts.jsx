import React from "react";
import LargePictureCarousel from "../largepicturecarousel/LargePictureCarousel";
import Categories from "../parts/categories/Categories";

const MainLayouts = () => {
  return (
    <div className="min-h-screen">
      <LargePictureCarousel />
      <Categories />
    </div>
  );
};

export default MainLayouts;
