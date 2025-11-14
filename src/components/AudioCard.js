import { useState, useRef, useContext } from "react";

// MUI Components
import { Card, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

// Context
import { SurahContext } from "../context/surahProvider";
import { LanguageContext } from "../context/languageProvider";

export default function AudioCard({ sheikhData, setSheikhData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const surah = useContext(SurahContext);
  const { locales } = useContext(LanguageContext);
  const arabicNames = surah.surahName.arabicName;
  const englishNames = surah.surahName.englishName;
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handlePrevNext = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => {
        setIsPlaying(true);
        audioRef.current.play();
      }, 1000);
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        // p: 2,
        // borderTop: "2px solid white",
        margin: "auto",
        boxShadow:"none"
      }}
    >
      <IconButton sx={{ color: "text.icon" }}>
        <SkipNextIcon
          sx={{ fontSize: { lg: "23px", md: "23px", sm: "20px", xs: "20px" } }}
          onClick={(e) => {
            sheikhData.Index >= 114
              ? e.preventDefault()
              : setSheikhData({
                  ...sheikhData,
                  Index: sheikhData.Index + 1,
                  surahLink: `${sheikhData.host}${String(
                    sheikhData.Index + 1
                  ).padStart(3, "0")}.mp3`,
                  surahName:
                    locales === "ar"
                      ? arabicNames[sheikhData.Index]
                      : englishNames[sheikhData.Index],
                });
            handlePrevNext();
          }}
        />
      </IconButton>
      <IconButton onClick={handlePlayPause} sx={{ color: "text.icon" }}>
        {isPlaying ? (
          <Pause
            sx={{
              fontSize: { lg: "23px", md: "23px", sm: "20px", xs: "20px" },
            }}
          />
        ) : (
          <PlayArrow
            sx={{
              fontSize: { lg: "23px", md: "23px", sm: "20px", xs: "20px" },
            }}
          />
        )}
      </IconButton>
      <IconButton sx={{ color: "text.icon" }}>
        <SkipPreviousIcon
          sx={{ fontSize: { lg: "23px", md: "23px", sm: "20px", xs: "20px" } }}
          onClick={(e) => {
            handlePlayPause();

            sheikhData.Index <= 1
              ? e.preventDefault()
              : // const fileNumber = String(sheikhData.Index).padStart(3, "0");
                setSheikhData({
                  ...sheikhData,
                  Index: sheikhData.Index - 1,
                  surahLink: `${sheikhData.host}${String(
                    sheikhData.Index - 1
                  ).padStart(3, "0")}.mp3`,
                  surahName:
                    locales === "ar"
                      ? arabicNames[sheikhData.Index - 2]
                      : englishNames[sheikhData.Index - 2],
                });
            handlePrevNext();
          }}
        />
      </IconButton>
      <audio ref={audioRef} src={sheikhData.surahLink} type="audio" />
    </Card>
  );
}
