import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationUA from "./locales/ua/translation.json";

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: "ua",
    resources: {
      en: {
        translation: translationEN,
      },
      ua: {
        translation: translationUA,
      },
    },
  });

export default i18next;
