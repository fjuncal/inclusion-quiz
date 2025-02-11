import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VideoSection from "./pages/VideoSection";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Resources from "./pages/Resources";
import Stories from "./pages/Stories";
import Tips from "./pages/Tips";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<VideoSection />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
