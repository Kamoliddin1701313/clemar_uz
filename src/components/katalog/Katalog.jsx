import React, { useState } from "react";
import sidebarImg1 from "../../assets/images/sidebarImg1.png";
import sidebarImg2 from "../../assets/images/sidebarImg2.png";
import sidebarImg3 from "../../assets/images/sidebarImg3.png";
import sidebarImg4 from "../../assets/images/sidebarImg4.png";
import sidebarImg5 from "../../assets/images/sidebarImg5.png";
import { GrNext } from "react-icons/gr";
import Tab1 from "../../components/tabs/Tab1";
import Tab2 from "../../components/tabs/Tab2";
import Tab3 from "../../components/tabs/Tab3";
import Tab4 from "../../components/tabs/Tab4";
import Tab5 from "../../components/tabs/Tab5";
import { useTranslation } from "react-i18next";
const Katalog = () => {
  const [tab, setTab] = useState("1");
  const { t } = useTranslation();

  return (
    <div className={`max-w-[1280px] mx-auto relative`}>
      <div className="w-full min-h-[100px] bg-white py-5 relative">
        <div className="flex justify-between gap-16 xl:gap-5 h-[280px]">
          <div className="w-[30%] lg:w-[40%] md:w-[50%] grid grid-rows-5 gap-y-1 border-r-[1px]">
            <button
              onMouseEnter={() => setTab("1")}
              className="flex justify-between items-center w-full xl:px-3 xl:py-2 hover:bg-[#f9f9f9] border-[1px] border-[#f9f9f9] rounded-[12px] border-solid p-3 xl:p-0"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={sidebarImg1}
                  alt="sidebarImg1"
                  className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px]"
                />
                <p className="leading-[18px] sm:text-[14px]">
                  {t("katalog.btn1")}
                </p>
              </div>
              <GrNext className="text-white" />
            </button>

            <button
              onMouseEnter={() => setTab("2")}
              className="flex justify-between items-center w-full  xl:py-2 hover:bg-[#f9f9f9] border-[1px] border-[#f9f9f9] rounded-[12px] border-solid p-3 xl:p-0"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={sidebarImg2}
                  alt="sidebarImg2"
                  className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px]"
                />
                <p className="leading-[18px] sm:text-[14px]">
                  {t("katalog.btn2")}
                </p>
              </div>
              <GrNext className="text-white" />
            </button>

            <button
              onMouseEnter={() => setTab("3")}
              className="flex justify-between items-center w-full  xl:py-2 hover:bg-[#f9f9f9] border-[1px] border-[#f9f9f9] rounded-[12px] border-solid p-3 xl:p-0"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={sidebarImg3}
                  alt="sidebarImg3"
                  className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px]"
                />
                <p className="leading-[18px] sm:text-[14px]">
                  {t("katalog.btn3")}
                </p>
              </div>
              <GrNext className="text-white" />
            </button>

            <button
              onMouseEnter={() => setTab("4")}
              className="flex justify-between items-center w-full  xl:py-2 hover:bg-[#f9f9f9] border-[1px] border-[#f9f9f9] rounded-[12px] border-solid p-3 xl:p-0"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={sidebarImg4}
                  alt="sidebarImg4"
                  className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px]"
                />
                <p className="leading-[18px] sm:text-[14px]">
                  {t("katalog.btn4")}
                </p>
              </div>
              <GrNext className="text-white" />
            </button>

            <button
              onMouseEnter={() => setTab("5")}
              className="flex justify-between items-center w-full  xl:py-2 hover:bg-[#f9f9f9] border-[1px] border-[#f9f9f9] rounded-[12px] border-solid p-3 xl:p-0"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={sidebarImg5}
                  alt="sidebarImg5"
                  className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px]"
                />
                <p className="leading-[18px] sm:text-[14px]">
                  {t("katalog.btn5")}
                </p>
              </div>
              <GrNext className="text-white" />
            </button>
          </div>

          <div className="flex w-[70%] lg:w-[60%] md:w-1/2 justify-between">
            {tab === "1" && <Tab1 />}
            {tab === "2" && <Tab2 />}
            {tab === "3" && <Tab3 />}
            {tab === "4" && <Tab4 />}
            {tab === "5" && <Tab5 />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
