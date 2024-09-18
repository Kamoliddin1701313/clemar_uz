import React from "react";
import { useParams } from "react-router-dom";
import { categoriesData } from "../../pages/categories/categoriesData";
import Product from "../../pages/product/Product";
import ShopBtn from "./ShopBtn";

const ProductsLayout = () => {
  const { id } = useParams();

  const product = categoriesData.find((product) => product.id == id);

  return (
    <div className="max-w-[992px] mx-auto py-10 lg:px-12 sm:px-6">
      {product ? (
        <div className="flex justify-between gap-5 h-[550px] lg:h-[680px] lg:grid lg:grid-cols-1">
          <div className="font-medium  lg:mx-auto lg:w-[60%] text-center">
            <img src={product.img} className="h-[70%] lg:w-full" />
            <h1 className="text-[23px]">{product.name}</h1>
            <h2 className="text-[18px] opacity-60 py-4">{product.size}</h2>
          </div>

          <div className="py-5 font-medium w-[40%] lg:w-[60%]  lg:mx-auto text-center">
            <div className="text-[23px]">
              <span>0</span> so'm
            </div>
            <p className="text-[18px] opacity-60 py-4">
              Ishonchingiz komil bo'lsin, mahsulotlarimiz eng yuqori
              sifatlilari!
            </p>
            <ShopBtn />
          </div>
        </div>
      ) : (
        <p>Mahsulot topilmadi ...</p>
      )}

      <Product />
    </div>
  );
};

export default ProductsLayout;
