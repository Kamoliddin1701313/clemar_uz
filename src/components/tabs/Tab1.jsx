import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Tab1 = () => {
const {t}=useTranslation()


  return (
    <div className="grid grid-cols-2 w-full lg:grid-cols-1">
      <div className="overflow-y-auto lg:h-[140px]">
        <Link
          to={"/"}
          className="block sm:text-[14px] leading-6 font-semibold hover:underline"
        >
          {t("tab1.link1")}
        </Link>
        <Link
          to={"/"}
          className="block sm:text-[14px] leading-6 font-semibold hover:underline"
        >
          {t("tab1.link2")}
        </Link>
      </div>

      <div className="overflow-y-auto lg:h-[140px]">
        <Link
          to={"/"}
          className="block sm:text-[14px] leading-6 font-semibold hover:underline"
        >
          {t("tab1.link3")}
        </Link>
        <Link
          to={"/"}
          className="block sm:text-[14px] leading-6 font-semibold hover:underline"
        >
          {t("tab1.link4")}
        </Link>
      </div>
    </div>
  );
};

export default Tab1;
