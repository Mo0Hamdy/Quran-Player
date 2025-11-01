import { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/dataProvider";
import { useTranslation } from "react-i18next";
import "../App.css";
import { Link } from "react-scroll";

// MUI Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
// import { useTheme } from "@emotion/react";

// Components
import PlayCard from "./PlayCard";
import SurahList from "./SurahList";

export default function Quran({ locales }) {
  // const theme = useTheme();
  const { t } = useTranslation();
  const dataFromContext = useContext(DataContext);
  const [recitersData, setRecitersData] = useState(dataFromContext);
  let [surahIndex, setSurahIndex] = useState();

  useEffect(() => {
    setRecitersData(dataFromContext);
  }, [dataFromContext]);

  const [sheikhData, setSheikhData] = useState(recitersData[0]);
  const reciters = recitersData.map((data) => (
    <Card
      className="card"
      sx={{
        width: { lg: "300px", md: "250px", sm: "200px", xs: "180px" },
        fontSize: { lg: "30px", md: "23px", sm: "20px", xs: "15px" },
        backgroundColor: "background.card",
        borderRadius: "10px",
        height: { lg: "310px", md: "280px", sm: "220px", xs: "230px" },
        border: "2px solid white",
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
              fontSize: { lg: "24px", md: "22px", sm: "18px", xs: "15px" },
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
          marginBlock: "50px",
          paddingBlock: "50px",
        }}
      >
        <section id="playList">
          <PlayCard sheikhData={sheikhData} />

          <SurahList
            setSheikhData={setSheikhData}
            sheikhData={sheikhData}
            setSurahIndex={setSurahIndex}
            locales={locales}
          />
        </section>
      </Container>
    </Container>
  );
}
