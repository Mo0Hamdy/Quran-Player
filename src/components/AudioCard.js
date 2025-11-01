import { Card, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import { useState, useRef } from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function AudioCard({ title, src }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        borderTop:"2px solid white"
      }}
    >
      <IconButton sx={{ color: "text.icon" }}>
        <SkipNextIcon />
      </IconButton>
      <IconButton onClick={handlePlayPause} sx={{ color: "text.icon" }}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <IconButton sx={{ color: "text.icon" }}>
        <SkipPreviousIcon />
      </IconButton>

      <audio ref={audioRef} src={src} type="audio" />
    </Card>
  );
}
