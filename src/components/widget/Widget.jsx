import {
  InstagramIcon,
  LocationIcon,
  TeligramIcon,
} from "../../assets/icons/Icons";
import WidgetModal from "./WidgetModal";
import { useTranslation } from "react-i18next";

const Widget = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value); // tilni o'zgartiramiz
  };

  return (
    <div className="bg-[#49c3f2] ">
      <div className="max-w-[1280px] mx-auto flex justify-between lg:px-6 sm:px-3 items-center py-3">
        <div className="flex gap-2 lg:gap-x-1">
          <LocationIcon className="w-[18px] h-[23px] lg:h-[20px]" />
          <div className="flex gap-x-1 text-white lg:text-[15px] sm:text-[14px]">
            <span>{t("widget.manzil")} : </span>
            <a
              className="underline text-white"
              href="https://yandex.uz/navi/10335/tashkent/?ll=69.220719%2C41.290161&panorama%5Bdirection%5D=227.914276%2C-0.865454&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=69.220719%2C41.290161&panorama%5Bspan%5D=116.129893%2C60.000000&z=10"
              target="_blank"
            >
              {t("widget.tashkent")}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-10 xl:gap-x-5 text-white">
          <div className="flex items-center lg:hidden gap-10 xl:gap-x-5">
            <a
              href="/"
              className="flex gap-4 xl:gap-2 items-center font-montserrat-light"
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
              <span>{t("widget.instagram")}</span>
            </a>

            <a
              href="https://t.me/the_rustambek"
              className="flex gap-4 xl:gap-2 items-center font-montserrat-light"
            >
              <TeligramIcon className="w-[18px] h-[18px]" />
              {t("widget.telegram")}
            </a>
          </div>

          <div className="flex gap-10 items-center xl:gap-x-5 lg:gap-x-3">
            <a
              href="tel:+998555001411"
              className="text-[18px] lg:text-[15px] sm:text-[14px] font-semibold"
            >
              +998 55 500 14 11
            </a>

            <select
              onChange={handleChangeLanguage}
              value={i18n.language}
              className="bg-transparent lg:text-[16px] sm:text-[14px] border-none border-0 py-2 lg:p-0 outline-none w-[70px] xl:w-[55px] lg:w-[50px]"
            >
              <option
                value="rus"
                className="bg-[#072b3d] text-center px-5 mx-4"
              >
                Rus
              </option>

              <option
                value="eng"
                className="bg-[#072b3d] text-center px-5 mx-4 tracking-[1.25em]"
              >
                Eng
              </option>

              <option
                value="uzb"
                className="bg-[#072b3d] text-center px-5 mx-4 tracking-[1.25em]"
              >
                Uzb
              </option>
            </select>
          </div>

          <WidgetModal>{t("widgetmodal.modal")}</WidgetModal>
        </div>
      </div>
    </div>
  );
};

export default Widget;
