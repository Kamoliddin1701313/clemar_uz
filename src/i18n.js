import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzbTranslation from "../public/uzb.json";
import rusTranslation from "../public/rus.json";
import engTranslation from "../public/eng.json";

const laungage = localStorage.getItem("i18nextLng") || "uzb";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "eng",
    lng: laungage, // Dastlabki til
    debug: true, // Til topilmasa foydalaniladigan fallback
    resources: {
      uzb: { translation: uzbTranslation },
      eng: { translation: engTranslation },
      rus: { translation: rusTranslation },
    },
  });

export default i18n;
