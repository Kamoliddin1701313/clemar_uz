import {
  InstagramIcon,
  LocationIcon,
  TeligramIcon,
} from "../../assets/icons/Icons";
import WidgetModal from "./WidgetModal";

const Widget = () => {
  return (
    <div className="bg-[#49c3f2]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-3">
        <div className="flex gap-2">
          <LocationIcon className="w-[18px] h-[23px]" />
          <div className="flex gap-x-1 text-white">
            <span>Manzil : </span>
            <a
              className="underline text-white"
              href="https://yandex.uz/navi/10335/tashkent/?ll=69.220719%2C41.290161&panorama%5Bdirection%5D=227.914276%2C-0.865454&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=69.220719%2C41.290161&panorama%5Bspan%5D=116.129893%2C60.000000&z=10"
              target="_blank"
            >
              Toshkent
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-10 text-white">
          <div className="flex items-center gap-10">
            <a
              href="/"
              className="flex gap-4 items-center font-montserrat-light"
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
              <span>Instagram</span>
            </a>
            <a
              href="/"
              className="flex gap-4 items-center font-montserrat-light"
            >
              <TeligramIcon className="w-[18px] h-[18px]" />
              Telegram
            </a>
          </div>

          <div className="flex gap-10 items-center">
            <a
              href="tel:+998555001411"
              className="text-[18px] font-montserrat-bold font-semibold"
            >
              +998 55 500 14 11
            </a>
            <select className="bg-transparent border-none border-0 py-2 outline-none w-[70px]">
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

          <div>
            <WidgetModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
