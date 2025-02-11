import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VideoSection from "./pages/VideoSection";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Resources from "./pages/Resources";
import Stories from "./pages/Stories";
import Tips from "./pages/Tips";
import Feedback from "./pages/Feedback";
import { useEffect, useState } from "react";
import Timeline from "./pages/Timeline";

function App() {
  // Carrega o tema do localStorage ou usa "dark" como padrão
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  });

  // Aplica a classe correspondente no <body> e salva a preferência
  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <BrowserRouter>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<VideoSection />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
