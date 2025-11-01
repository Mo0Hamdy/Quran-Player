import { useState, useEffect, createContext } from "react";
import axios from "axios";
export const SurahContext = createContext();

export const SurahProvider = ({ children }) => {
  const [surahName, setSurahName] = useState({
    arabicName: [],
    englishName: [],
  });

  useEffect(() => {
    axios
      .get("https://api.alquran.cloud/v1/surah")
      .then((response) => {
        let names = response.data.data.map((item) => item.name);
        let englishNames = response.data.data.map((item) => item.englishName);

        setSurahName((prev) => ({
          ...prev,
          arabicName: names,
          englishName: englishNames,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SurahContext.Provider value={{ surahName }}>
      {children}
    </SurahContext.Provider>
  );
};
