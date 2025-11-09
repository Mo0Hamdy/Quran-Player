import { useState } from "react";

// Language translation
import { useTranslation } from "react-i18next";

// MUI components
import Button from "@mui/material/Button";
import ReplayIcon from "@mui/icons-material/Replay";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Dhekr({ element }) {
  const { id, count, text } = element;
  const [counter, setCounter] = useState(0);
  const { t } = useTranslation();
  return (
    <Card
      key={id}
      variant="outlined"
      dir="rtl"
      sx={{
        width: 400,
        background: "#F3F6F4",
        color:"text.card",
        backgroundColor:"background.default",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly"

      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          {text}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          endIcon={<ReplayIcon style={{ color: "#E9FFF9 !important" }} />}
          onClick={() => {
            setCounter(0);
          }}
          dir="ltr"
          style={{
            borderColor: "#C1D0C7",
            background: "#2C786C",
            color: "white",
          }}
        >
          {t("Recount")}
        </Button>
        <Button
          style={{ background: counter >= Number(count) ? "green" : "#0B3D2E" }}
          size="small"
          value={counter}
          sx={{ color: "white", borderColor: "#2C786C" }}
          onClick={(e) => {
            counter < count ? setCounter(counter + 1) : e.preventDefault();
          }}
        >
          {counter} / {count}
        </Button>
      </CardActions>
    </Card>
  );
}
