import "../footer.css";
import { t } from "i18next";
// MUI components
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
export default function Footer() {
  const data = [
    {
      id: 1,
      link: "https://www.facebook.com/share/16mnf3keb6/",
      icon: FacebookRoundedIcon,
      background: "#1877f2",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/m0hamedhamdy/",
      icon: LinkedInIcon,
      background: "#0077b5",
    },
    {
      id: 3,
      link: "#",
      icon: TwitterIcon,
      background: "#1da1f2",
    },
  ];
  const icons = data.map((element) => {
    return (
      <li key={element.id}>
        <a
          href={element.link}
          target="blank"
          style={{ background: element.background }}
        >
          <element.icon className="icon" />
        </a>
      </li>
    );
  });
  return (
    <div
      style={{
        background: "#ccc",
        textTransform: "capitalize",
      }}
      className="footer"
    >
      <div className="contact">
        <div className="left">
          <h3 style={{ padding: "10px", color: "theme.text.primary",fontWeight:"600" }}>
            {t("contact us on social media")}
          </h3>
          <div style={{ margin: "auto" }}>
            <ul className="icons">{icons}</ul>
          </div>
        </div>
        <div className="right">
          <Typography
            gutterBottom
            sx={{
              width: { xs: "70%", md: "50%" },
              textAlign: "left",
              paddingBottom: "10px",
              fontWeight: "600",
            }}
            color="text.primary"
          >
            {t(
              "Get in touch with us via mail phone.We are waiting for your call or message"
            )}
          </Typography>
          <input placeholder="mh7586931@gmail.com"></input>
        </div>
      </div>
      <div
        style={{
          background: "#001f3f",
          color: "white",
          fontSize: "15px",
        }}
      >
        <div style={{ paddingBlock: "20px" }}>
          all rights reserved &copy;{" "}
          <span style={{ color: "teal" }}>Mohamed Hamdy</span> 2025
        </div>
      </div>
    </div>
  );
}
