import { SurahContext } from "../context/surahProvider";
import { LanguageContext } from "../context/languageProvider";
import { useContext } from "react";
import "../quran.css";

export default function SurahList({
  sheikhData,
  setSheikhData,
}) {
  const { surahName } = useContext(SurahContext);
  const {locales} = useContext(LanguageContext)

  const arabicList = surahName.arabicName.map((e, index) => {
    const fileNumber = String(index + 1).padStart(3, "0");
    return (
      <li
        key={index}
        onClick={() => {
          setSheikhData({
            ...sheikhData,
            surahName: e,
            Index: index + 1,
            surahLink: `${sheikhData.host}${fileNumber}.mp3`,
          });
        }}
        style={{
          backgroundColor: sheikhData.Index === (index+1) ? "#6baf8d" : null,
        }}
      >
        {index + 1} {e}
      </li>
    );
  });

  const englishList = surahName.englishName.map((e, index) => {
    const fileNumber = String(index + 1).padStart(3, "0");
    return (
      <li
        key={index}
        onClick={() => {
          setSheikhData({
            ...sheikhData,
            surahName: e,
            Index: index + 1,
            surahLink: `${sheikhData.host}${fileNumber}.mp3`,
          });
        }}
        style={{
          backgroundColor: sheikhData.Index === index+1 ? "#6baf8d" : null,
        }}
      >
        {index + 1} {e}
      </li>
    );
  });

  return (
    <div className="sheikh">
      <ul>{locales === "ar" ? arabicList : englishList}</ul>
    </div>
  );
}
