import React from "react";
import {
  DownloadIcon,
  LocationIconFooter,
  MessageIconFooter,
} from "../../assets/icons/Icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0d2741]">
      <div className="bottom-0 relative grid grid-cols-2 lg:px-6 sm:px-3 lg:grid-cols-1 gap-20 lg:gap-8 z-30 py-10 w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[60%_40%] gap-10  md:gap-5 md:grid-cols-2 sm:grid-cols-1">
          <div className="text-white grid grid-cols-1">
            <h2 className="text-[23px] mb-4 xxl:text-[16px] sm:text-[18px]">
              {t("footer.footertitle")}
            </h2>
            <p className="xxl:text-[12px] sm:text-[16px]">
              {t("footer.footerheadertitle1")}
            </p>
            <a
              href="tel:++998990081411"
              className="text-[18px] my-4 xxl:text-[16px] sm:text-[16px]"
            >
              +998 99 008 14 11
            </a>
            <div className="flex gap-2 items-center">
              <LocationIconFooter />
              <a href="#" className="underline text-[12px] sm:text-[16px]">
                {t("footer.footerlocation")}
              </a>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <MessageIconFooter />
              <a href="#" className="underline text-[12px] sm:text-[16px]">
                {t("footer.footerlogotip")}
              </a>
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-[18px] mb-4">
              <a href="/" className="text-[16px] sm:text-[18px]">
                {t("footer.footerheadertitle2")}
              </a>
            </h3>

            <a href="/" className="mb-4 block text-[12px] sm:text-[16px]">
              {t("footer.footerpage1")}
            </a>

            <a href="/" className="mb-4 block text-[12px] sm:text-[16px]">
              {t("footer.footerpage2")}
            </a>

            <a href="/" className="mb-4 block text-[12px] sm:text-[16px]">
              {t("footer.footerpage3")}
            </a>

            <a href="/" className="text-[12px] sm:text-[16px]">
              {t("footer.footerpage4")}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 md:gap-5 md:grid-cols-2 sm:grid-cols-1">
          <div className="text-white relative">
            <h3 className="text-[18px] mb-4">
              <a href="/" className="text-[16px] sm:text-[18px]">
                {t("footer.footerheadertitle3")}
              </a>
            </h3>

            <a href="/" className="mb-4 block text-[12px] sm:text-[16px]">
              {t("footer.footerpage5")}
            </a>

            <a href="/" className="mb-4 block text-[12px] sm:text-[16px]">
              {t("footer.footerpage6")}
            </a>

            <a href="/" className="mb-4 block text-[12px] sm:text-[16px]">
              {t("footer.footerpage7")}
            </a>

            <a href="/" className="text-[12px] sm:text-[16px]">
              {t("footer.footerpage8")}
            </a>
          </div>

          <div className="text-white">
            <a href="/" className="mb-4 block text-[12px] sm:text-[16px]">
              {t("footer.footerpage9")}
            </a>

            <a href="#" className="mb-4 text-[12px] sm:text-[16px] flex">
              {t("footer.footerpage10")}
              <span>
                <DownloadIcon />
              </span>
            </a>

            <iframe
              className="xxl:w-[85%] xxl:h-[120px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.638813381878!2d69.28315707587592!3d41.33846677130615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sru!2s!4v1726306402298!5m2!1sru!2s"
              style={{ border: 1, borderRadius: 10 }}
              width="90%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
