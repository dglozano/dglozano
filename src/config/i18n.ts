import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "config/translations/en";
import es from "config/translations/es";
import no from "config/translations/no";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: false,
    load: "languageOnly",
    whitelist: ["en", "es", "no"],
    detection: { checkWhitelist: true },
    resources: {
      en,
      es,
      no
    }
  });

export default i18n;
