import "../../src/App.css";
import Typography from "@mui/material/Typography";
export default function Home() {
  return (
    <div className="Home" style={{ position: "relative", color: "white" }}>
      <video
        preload="none"
        playsInline
        autoPlay
        loop
        muted
        style={{ width: "100%" }}
      >
        <source src="/Ramadan background Islam.webm" type="video/webm" />
      </video>
      <div className="home">
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "30px", md: "35px", lg: "40px" },
          }}
          gutterBottom
        >
          جنة المسلم
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "35px" } }}
          gutterBottom
        >
          اقرأ...واذكر...وادعُ...فالجنة تُنال برحمة الله
        </Typography>
      </div>
    </div>
  );
}
