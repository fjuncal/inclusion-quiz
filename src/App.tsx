import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VideoSection from "./pages/VideoSection";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoSection />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
