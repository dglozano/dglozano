import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "config/translations/en";
import es from "config/translations/es";
import no from "config/translations/no";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    load: "languageOnly",
    whitelist: ["en", "es", "no"],
    detection: { checkWhitelist: true },
    resources: {
      en,
      es,
      no,
    },
  });

export default i18n;
