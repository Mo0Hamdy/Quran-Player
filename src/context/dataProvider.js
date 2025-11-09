import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { SurahContext } from "./surahProvider";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const surah = useContext(SurahContext);
  const recitersData = [
    {
      name: "Mashary El Afasy",
      key: "afs",
      host: "https://server8.mp3quran.net/afs/",
      img: "/images/Mashary.jpeg",
      id: uuidv4(),
      Index: 0,
      surahName: surah[0],
      surahLink: "https://server8.mp3quran.net/afs/001.mp3",
    },
    {
      name: "Mahmoud Ali El-banna",
      key: "bna",
      host: "https://server8.mp3quran.net/bna/",
      img: "/images/Banna.jpeg",
      Index: 0,
      id: uuidv4(),
      surahName: surah[0],
      surahLink: "https://server8.mp3quran.net/bna/001.mp3",
    },

    {
      name: "Mohamed Ayyub",
      key: "ayyub",
      host: "https://server8.mp3quran.net/ayyub/",
      img: "/images/Ayoub.jpeg",
      Index: 0,
      id: uuidv4(),
      surahName: surah[0],
      surahLink: "https://server8.mp3quran.net/ayyub/001.mp3",
    },
    {
      name: "Mostafa Ismail",
      key: "mustafa",
      host: "https://server8.mp3quran.net/mustafa/",
      img: "/images/Mostafa.jpeg",
      Index: 0,
      id: uuidv4(),
      surahName: surah[0],
      surahLink: "https://server8.mp3quran.net/mustafa/001.mp3",
    },
  ];

  return (
    <DataContext.Provider value={recitersData}>{children}</DataContext.Provider>
  );
};
