import { useContext } from "react";
import "../quran.css";
import { SurahContext } from "../context/surahProvider";

export default function SurahList({
  sheikhData,
  setSheikhData,
  setSurahIndex,
  locales,
}) {
  const { surahName } = useContext(SurahContext);

  const arabicList = surahName.arabicName.map((e, index) => {
    const fileNumber = String(index + 1).padStart(3, "0");
    return (
      <li
        key={index}
        onClick={() => {
          setSheikhData({
            ...sheikhData,
            surahName: e,
            surahLink: `${sheikhData.host}${fileNumber}.mp3`,
          });
          setSurahIndex(fileNumber);
        }}
        style={{
          backgroundColor: sheikhData.surahName === e ? "#6baf8d" : null,
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
            surahLink: `${sheikhData.host}${fileNumber}.mp3`,
          });
          setSurahIndex(fileNumber);
        }}
        style={{
          backgroundColor: sheikhData.surahName === e ? "#6baf8d" : null,
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
