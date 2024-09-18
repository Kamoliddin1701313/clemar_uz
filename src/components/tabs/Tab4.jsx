import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Tab4 = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 w-full z-50 lg:grid-cols-1">
      <div className="overflow-y-auto lg:h-[140px]">
        <Link
          to="/"
          className="block sm:text-[14px] leading-6 font-semibold hover:underline"
        >
          {t("tab4.link1")}
        </Link>

        <Link
          to="/"
          className="block sm:text-[14px] leading-6 font-semibold hover:underline"
        >
          {t("tab4.link2")}
        </Link>

        <Link
          to="/"
          className="block sm:text-[14px] leading-6 font-semibold hover:underline"
        >
          {t("tab4.link3")}
        </Link>

        <Link
          to="/"
          className="block sm:text-[14px] leading-6 font-semibold hover:underline"
        >
          {t("tab4.link4")}
        </Link>
      </div>

      <div className="overflow-y-auto lg:h-[140px]">
        <Link
          to="/"
          className="block sm:text-[14px] font-semibold hover:underline"
        >
          {t("tab4.link5")}
        </Link>

        <Link
          to="/"
          className="block sm:text-[14px] font-semibold hover:underline"
        >
          {t("tab4.link6")}
        </Link>

        <Link
          to="/"
          className="block sm:text-[14px] font-semibold hover:underline"
        >
          {t("tab4.link7")}
        </Link>
      </div>
    </div>
  );
};

export default Tab4;
