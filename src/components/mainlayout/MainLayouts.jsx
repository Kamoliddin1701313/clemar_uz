import React from "react";
import LargePictureCarousel from "../largepicturecarousel/LargePictureCarousel";
import Categories from "../../pages/categories/Categories";
import Product from "../../pages/product/Product";
import BrandSponsorsCarousel from "../brandsponsorscarousel/BrandSponsorsCarousel";
import OurNews from "../OurNews/OurNews";
import ContactUs from "../contactus/ContactUs";
// import ProductsLayout from "../productsLayout/ProductsLayout";

const MainLayouts = () => {
  


  return (
    <div className="min-h-screen">
      <LargePictureCarousel />
      <Categories />
      <Product />
      <Categories />
      <Product />
      <BrandSponsorsCarousel />
      <OurNews />
      <ContactUs />
    </div>
  );
};

export default MainLayouts;
