import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import "./App.css";
// componenets
import Adhkar from "./components/Adhkar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sheikh from "./components/Sheikh";

// MUI components
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Context hooks
import { DataProvider } from "./context/dataProvider";
import { SurahProvider } from "./context/surahProvider";
function App() {
  const { t, i18n } = useTranslation();
  const [locales, setLocales] = useState("ar");
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [mode, setMode] = useState("Dark Mode");
  function handleLocales() {
    if (locales === "en") {
      i18n.changeLanguage("ar");
      setLocales("ar");
    } else if (locales === "ar") {
      i18n.changeLanguage("en");
      setLocales("en");
    }
  }
  const theme = createTheme({
    typography: {
      fontFamily: ["Merhey"],
    },
    palette:
      mode === "Dark Mode"
        ? {
            primary: { main: "#1a77e8" },
            secondary: { main: "#00a884" },
            background: {
              default: "#f8fafc",
              paper: "#f1f5f9",
              card: "#ffffff",
            },
            text: {
              title: "#1a1a1a",
              primary: "#1a1a1a",
              secondary: "#4d4d4d",
              card:"#004B23",
              icon: "#6c6c6c",
            },
          }
        : {
            primary: { main: "#4aa3ff" },
            secondary: { main: "#4dd6b5" },
            background: {
              default: "#0f172a",
              paper: "#1e293b",
              card: "#1e293b",
            },
            text: {
              title: "#f1f5f9",
              primary: "#e6e6e6",
              secondary: "#9aa5b1",
              card:"#ffffff",
              icon: "#ffffff",
            },
          },
  });

  function showAndHide() {
    if (window.scrollY > 500) {
      setShowArrowUp(true);
    } else {
      setShowArrowUp(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showAndHide);
    return () => window.removeEventListener("scroll", showAndHide);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SurahProvider>
        <DataProvider>
          <div
            className="App"
            style={{
              direction: locales === "ar" ? "rtl" : "ltr",
            }}
          >
            <section id="navBar">
              <NavBar
                locales={locales}
                mode={mode}
                setMode={setMode}
                handleLocales={handleLocales}
              />
            </section>
            <Home />
            <section id="Holy Quran">
              <Sheikh locales={locales} />
            </section>
            <section id="Adhkar">
              <Adhkar locales={locales} />
            </section>
            <section id="Contact Us">
              <Footer />
            </section>
            <Link to="navBar">
              <KeyboardArrowUpIcon
                sx={{ opacity: showArrowUp ? "1" : "0" }}
                className="Link"
              />
            </Link>
          </div>
        </DataProvider>
      </SurahProvider>
      <CssBaseline />
    </ThemeProvider>
  );
}
export default App;
