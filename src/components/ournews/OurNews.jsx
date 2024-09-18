import React from "react";
import { Link } from "react-router-dom";
import deposit from "../../assets/images/deposit.png";
import discount from "../../assets/images/discount.png";
import { useTranslation } from "react-i18next";

const OurNews = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1280px] mx-auto py-20 xxl:py-14 xl:py-8 lg:px-12 sm:px-6">
      <h1 className="text-[35px] font-semibold py-5 xxl:text-[22px]">
        {t("ournews.ournewsname")}
      </h1>
      <div className="grid grid-cols-[58%_40%] justify-between lg:grid lg:grid-cols-1 lg:gap-7">
        <div className="bg-[#49c3f2] p-6 lg:py-10 rounded-[20px] grid grid-cols-[60%_32%] justify-between items-center">
          <div className="grid content-between text-white">
            <h3 className="text-[23px] font-montserrat-bold xxl:text-[15px] lg:text-[17px]">
              {t("ournews.ournewstitle1")}
            </h3>
            <p className="text-[14px] my-3 xxl:text-[10px] lg:line-clamp-4">
              {t("ournews.ournewstext1")}
            </p>
            <Link
              to={`/news/2`}
              className="text-[#49c3f2] flex items-center justify-center text-[20px]  xxl:text-[12px] bg-white h-[50px] xxl:h-[40px] w-[140px] xxl:w-[100px] hover:scale-110 duration-500
 rounded-[12px]"
            >
              {t("ournews.ournewsbtn")}
            </Link>
          </div>

          <div>
            <img src={discount} alt="discount" />
          </div>
        </div>

        <div className="bg-[#072b3d] p-6 lg:py-10 rounded-[20px] grid grid-cols-[60%_40%] items-center">
          <div className="grid content-between text-white">
            <h3 className="text-[23px] font-montserrat-bold xxl:text-[15px] lg:text-[17px]">
              {t("ournews.ournewstitle2")}
            </h3>
            <p className="text-[14px] my-3 xxl:text-[10px] lg:line-clamp-4">
              {t("ournews.ournewstext2")}
            </p>
            <Link
              className="text-[#49c3f2] flex items-center justify-center text-[20px] xxl:text-[12px] bg-white h-[50px] xxl:h-[40px] w-[140px] xxl:w-[100px] hover:scale-110 duration-500
rounded-[12px]"
              to={`/news/3`}
            >
              {t("ournews.ournewsbtn")}
            </Link>
          </div>

          <div>
            <img src={deposit} alt="deposit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNews;
