import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./App.css";
// componenets
import Home from "./components/Home";
import Adhkar from "./components/Adhkar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Sheikh from "./components/Sheikh";

// MUI components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Context hooks
import { DataProvider } from "./context/dataProvider";
import { SurahProvider } from "./context/surahProvider";
import { LanguageProvider } from "./context/languageProvider";
function App() {
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [mode, setMode] = useState("Dark Mode");

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
              card: "#004B23",
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
              card: "#ffffff",
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
      <CssBaseline />
      <LanguageProvider>
        <SurahProvider>
          <DataProvider>
            <div className="App">
              <section id="navBar">
                <NavBar mode={mode} setMode={setMode} />
              </section>
              <Home />
              <section id="Holy Quran">
                <Sheikh />
              </section>
              <section id="Adhkar">
                <Adhkar />
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
      </LanguageProvider>
    </ThemeProvider>
  );
}
export default App;
