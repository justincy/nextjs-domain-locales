import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLocales = ["en", "de", "es"];

export default function initI18N(lang) {
  console.log("initI18N: lang:", lang);
  i18n.use(initReactI18next);
  i18n.init({
    fallbackLng: "en",
    lng: lang || "en",
    resources: {
      en: {
        translation: {
          helloWorld: "Hello world",
        },
      },
    },
  });
  return i18n;
}
