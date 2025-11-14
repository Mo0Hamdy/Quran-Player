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
        margin: {lg:"0",md:"0", sm: "auto", xs: "small" },
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", color: "text.icon" }}
      >
        <CardContent sx={{ flex: "1 0 auto", padding: "8px 18px 0px" }}>
          <Typography component="div" variant="h6">
            {t(sheikhData?.surahName)}
          </Typography>
          <Typography component="div" sx={{ fontSize: "13px" }}>
            {t(sheikhData?.name)}
          </Typography>
        </CardContent>
        <AudioCard sheikhData={sheikhData} setSheikhData={setSheikhData} />
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "45%", height: "50%" }}
        image={sheikhData?.img}
      />
    </Card>
  );
}
