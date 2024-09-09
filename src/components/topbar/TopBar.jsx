import React from "react";
import { KatalogIcon, SearchIcon } from "../../assets/icons/Icons";
import clemart from "../../assets/images/clemar.png";
import heart from "../../assets/images/heart.png";

const TopBar = () => {
  return (
    <div>
      <div
        className={`max-w-[1280px] mx-auto bg-red-500 w-full h-[75px] gap-7 flex items-center py-3 justify-between`}
      >
        <div className="flex items-center w-[33%] gap-7 justify-between h-75px">
          <a
            href="/"
            className="flex items-center text-[18px] hover:bg-[#6bb7d5a8] tracking-[4px] text-white font-montserrat-bold bg-[#49c3f2] px-7 py-3 gap-3 rounded-[8px]"
          >
            <KatalogIcon className="w-6 h-full" />
            <span>Katalog</span>
          </a>
          <img src={clemart} className="w-[200px] h-full cursor-pointer" />
        </div>

        <div className="flex items-center w-[66%] h-[75px] justify-between gap-7">
          <form className="flex items-center w-[60%]">
            <input
              type="text"
              className="w-full h-[100%] py-3 px-6 border-2 border-[#e2e5e8] outline-none rounded-l-[10px]"
              placeholder="Katalog"
            />
            <SearchIcon className="bg-[#007aff] w-[100px] h-[48px] py-3 rounded-r-[10px] cursor-pointer" />
          </form>
          <a href="/" className="font-montserrat-regular font-semibold">
            Biz haqimizda
          </a>

          <a
            href="/"
            className="flex items-center justify-between gap-2 font-montserrat-regular font-semibold"
          >
            <span className="relative flex">
              <img src={heart} className="w-[28px]" />
              <span className="w-[16px] absolute -right-1 -top-1 h-[16px] rounded-full bg-[#49c3f2] text-white flex justify-center text-[12px] items-center">
                5
              </span>
            </span>
            <span>Sevimlilar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
