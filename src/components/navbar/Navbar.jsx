import Widget from "../widget/Widget";
import { KatalogIcon, SearchIcon } from "../../assets/icons/Icons";
import clemart from "../../assets/images/clemar.png";
import heart from "../../assets/images/heart.png";
import { useEffect, useState } from "react";
import Katalog from "../katalog/Katalog";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [katalog, setKatalog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 68) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Widget />

      <div
        className={`max-w-[1280px] mx-auto lg:px-6 sm:px-3 ${
          isScrolled
            ? "fixed w-full z-50 top-0 left-1/2 bg-white transform -translate-x-1/2"
            : ""
        }`}
      >
        <div
          className={`h-[60px] lg:h-[120px] my-4 z-50 xl:m-0 lg:py-2 gap-5 flex items-center justify-between lg:gap-y-0 lg:grid lg:grid-cols-1`}
        >
          <div className="flex lg:w-full items-center gap-5 xl:gap-3 justify-between">
            <button
              onClick={() => setKatalog(!katalog)}
              href="/"
              className="flex items-center text-[18px] xxl:text-[16px] relative lg:text-[18px] md:text-[13px] hover:bg-[#6bb7d5a8] tracking-[4px] text-white font-montserrat-bold bg-[#49c3f2] px-7 xxl:px-4 xl:px-3 py-3 xxl:py-2 gap-3 rounded-[8px]"
            >
              {katalog ? (
                <AiOutlineClose className="w-6 h-full xxl:w-5 xl:w-4 md:w-3" />
              ) : (
                <KatalogIcon className="w-6 h-full xxl:w-5 xl:w-4 md:w-3" />
              )}

              <span>{t("navbar.katalog")}</span>
            </button>

            <img
              src={clemart}
              className="w-[220px] xxl:w-[155px] lg:w-[140px] lg:absolute lg:left-[200px] sm:-ml-[60px] xl:w-[100px] md:w-[80px] md:h-[30px] h-full xxl:h-[40px] cursor-pointer md:-ml-10"
            />

            <Link
              to="/about"
              className="font-montserrat-regular hidden lg:block font-semibold xl:leading-[20px]"
            >
              {t("navbar.bizhaqimizda")}
            </Link>
          </div>

          <div className="flex lg:w-full items-center gap-5 w-[65%] xl:gap-3 justify-between">
            <form className="flex items-center w-[60%] lg:w-[70%] xxl:h-[40px] md:h-[35px]">
              <input
                type="text"
                className="w-full h-[100%] py-3 px-6 xxl:px-3 border-2 border-[#e2e5e8] outline-none rounded-l-[10px]"
                placeholder={t("navbar.placeholdernavbar")}
              />
              <SearchIcon className="bg-[#007aff] w-[100px] xxl:w-[70px] h-[49px] xxl:h-[40px] md:h-[35px] py-3 xxl:py-[10px] rounded-r-[10px] cursor-pointer" />
            </form>

            <Link
              to="/about"
              className="font-montserrat-regular lg:hidden font-semibold xl:leading-[20px]"
            >
              {t("navbar.bizhaqimizda")}
            </Link>

            <a
              href="/"
              className="flex items-center justify-between gap-2 font-montserrat-regular font-semibold"
            >
              <span className="relative flex">
                <img src={heart} className="w-[28px] md:w-[22px]" />

                <span className="w-[16px] h-[16px] md:w-[14px] md:h-[14px] absolute -right-1 -top-1 rounded-full bg-[#49c3f2] text-white flex justify-center text-[12px] md:text-[10px] items-center">
                  5
                </span>
              </span>
              <span>{t("navbar.sevimli")}</span>
            </a>
          </div>
        </div>

        {katalog ? <Katalog /> : null}
      </div>
    </div>
  );
};

export default Navbar;
