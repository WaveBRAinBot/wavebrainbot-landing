import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

if (!i18n.isInitialized) {
  i18n
    .use(
      resourcesToBackend(
        (lng: string, ns: string) =>
          import(`../public/locales/${lng}/${ns}.json`)
      )
    )
    .use(initReactI18next)
    .init({
      fallbackLng: "pt",
      supportedLngs: ["pt", "en", "es"],
      defaultNS: "common",
      lng: typeof window !== "undefined"
        ? (localStorage.getItem("wbb-lang") ?? "pt")
        : "pt",
      interpolation: { escapeValue: false },
    });
}

export default i18n;
