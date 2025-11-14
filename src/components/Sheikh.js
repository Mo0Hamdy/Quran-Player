import "../App.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useState, useContext, useEffect } from "react";

// Contexts
import { DataContext } from "../context/dataProvider";
import { LanguageContext } from "../context/languageProvider";

// MUI Components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
// import { useTheme } from "@emotion/react";

// Components
import PlayCard from "./PlayCard";
import SurahList from "./SurahList";

export default function Quran() {
  // const theme = useTheme();
  const { t } = useTranslation();
  const dataFromContext = useContext(DataContext);
  const { locales } = useContext(LanguageContext);
  const [recitersData, setRecitersData] = useState(dataFromContext);

  useEffect(() => {
    setRecitersData(dataFromContext);
  }, [dataFromContext]);

  const [sheikhData, setSheikhData] = useState(recitersData[0]);
  const reciters = recitersData.map((data) => (
    <Card
      className="card"
      sx={{
        width: { lg: "300px", md: "250px", sm: "200px", xs: "180px" },
        backgroundColor: "background.card",
        borderRadius: "10px",
        height: { lg: "310px", md: "280px", sm: "220px", xs: "230px" },
        border: "2px solid white",
        direction: locales === "en" ? "ltr" : "rtl",
        // direction:"ltr"
      }}
      key={data.id}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.img}
          alt={data.name}
          className="cardMedia"
          sx={{
            overflow: "hidden",
            height: { lg: "200px", md: "180px", sm: "160", xs: "130px" },
          }}
        />
        <CardContent sx={{ paddingBottom: "0px" }}>
          <Typography
            className="cardContent"
            component="div"
            sx={{
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "15px" },
              color: "primary",
            }}
          >
            {t(data.name)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="playList" smooth="linear" duration={600}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              setSheikhData(data);
            }}
          >
            {t("Listen")}
          </Button>
        </Link>
      </CardActions>
    </Card>
  ));
  return (
    <Container
      sx={{
        paddingBlock: { lg: "50px", md: "40px", sm: "30px", xs: "25px" },
        backgroundColor: "background.default",
        color: "primary",
      }}
      maxWidth="70%"
    >
      <div className="title" style={{ position: "relative" }}>
        <h2>{t("Holy Quran")}</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "space-evenly",
        }}
      >
        {reciters}
      </div>
      <Container
        className="playSurah"
        sx={{
          backgroundColor: "background.paper",
          marginBlock: "30px",
          paddingBlock: "30px",
        }}
      >
        <section
          id="playList"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "80%",
          }}
        >
          <PlayCard sheikhData={sheikhData} setSheikhData={setSheikhData} />

          <SurahList setSheikhData={setSheikhData} sheikhData={sheikhData} />
        </section>
      </Container>
    </Container>
  );
}
