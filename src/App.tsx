import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VideoSection from "./pages/VideoSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoSection />} />
        <Route path="/quiz" element={<h1>Quiz</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
