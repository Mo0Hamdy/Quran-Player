import { useTranslation } from "react-i18next";

// MUI Components
import AudioCard from "./AudioCard";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function PlayCard({ sheikhData, setSheikhData }) {
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        display: "flex",
        height: "100%",
        border: "2px solid white",
        borderRadius: "20px",
        width: "270px",
        margin:"auto"
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", color: "text.icon" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {t(sheikhData?.surahName)}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {t(sheikhData?.name)}
          </Typography>
        </CardContent>
        <AudioCard
          sheikhData={sheikhData}
          setSheikhData={setSheikhData}
        />
      </Box>
      <CardMedia component="img" sx={{ width: "34%" }} image={sheikhData?.img} />
    </Card>
  );
}
