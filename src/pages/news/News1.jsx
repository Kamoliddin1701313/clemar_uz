import newsimg2 from "../../assets/images/newsimg2.png";
import newsimg3 from "../../assets/images/newsimg3.png";
import newsgif1 from "../../assets/images/newsgif1.gif";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News1 = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1280px] mx-auto py-10 lg:py-5 lg:px-12 sm:px-6">
      <h1 className="text-[35px] font-semibold xl:text-[30px] lg:text-[26px] md:text-[22px]">
        {t("news1.newstitle")}
      </h1>

      <div className="w-3/4 lg:w-full mx-auto">
        <img
          src={newsgif1}
          alt="aboutpageimg"
          className="w-full h-[400px] lg:h-[280px] sm:h-[220px] rounded-[30px] my-7"
        />
      </div>

      <p className="text-black opacity-60 font-montserrat-bold text-[18px] xl:text-[16px] md:text-[14px]">
        {t("news1.newstext1")}
      </p>

      <h1 className="text-[30px] font-semibold my-7 lg:my-4 xl:text-[30px] lg:text-[26px] md:text-[22px]">
        {t("news1.othernews")}
      </h1>

      <div className="flex gap-8 w-1/2 xl:gap-4 xl:w-3/5 lg:w-full md:flex-wrap">
        <div className="border-[1px] border-[#EEEEEE] h-[350px] p-3 rounded-[20px] w-1/2 md:w-full">
          <img src={newsimg2} alt="newsgif1" className="mt-4 h-[45%] w-full" />
          <div className="grid content-between">
            <h4 className="font-semibold text-[16px] leading-[17px] mt-7 lg:mt-3">
              {t("news1.newsproductstext1")}
            </h4>

            <p className="line-clamp-3 text-[14px] font-semibold my-3 opacity-55 leading-[17px]">
              {t("news1.newstext2")}
            </p>

            <Link
              to={`/news/2`}
              className="text-[#49c3f2] font-bold text-[15px] underline"
            >
              {t("news1.newsnextpagebtn")}
            </Link>
          </div>
        </div>

        <div className="border-[1px] border-[#EEEEEE] p-3 h-[350px] rounded-[20px] w-1/2 md:w-full">
          <img src={newsimg3} alt="newsimg3" className="mt-4 h-[45%] w-full" />
          <div className="grid content-between">
            <h4 className="font-semibold text-[16px] leading-[17px] mt-7 lg:mt-3">
              {t("news1.newsproductstext2")}
            </h4>
            <p className="line-clamp-3 text-[14px] font-semibold my-3 opacity-55 leading-[17px]">
              {t("news1.newstext3")}
            </p>
            <Link
              to={"/news/3"}
              className="text-[#49c3f2] font-bold text-[15px] underline"
            >
              {t("news1.newsnextpagebtn")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News1;
