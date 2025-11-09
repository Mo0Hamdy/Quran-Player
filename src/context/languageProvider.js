import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [locales, setLocales] = useState("ar");
  function handleLocales() {
    if (locales === "en") {
      i18n.changeLanguage("ar");
      setLocales("ar");
    } else if (locales === "ar") {
      i18n.changeLanguage("en");
      setLocales("en");
    }
  }
  return <LanguageContext.Provider value={{locales,setLocales,handleLocales}}>{children}</LanguageContext.Provider>;
};
