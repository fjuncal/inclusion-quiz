import { Link } from "react-router-dom";

function VideoSection() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Welcome to the Inclusion Quiz</h1>
      <p>
        Here, you'll learn about diversity, inclusion, and the challenges faced
        by minority groups in tech. Watch the video below to get started.
      </p>

      {/* Exemplo de iframe embutindo um vídeo do YouTube */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Educational Video"
        allowFullScreen
      />

      <div style={{ marginTop: "1rem" }}>
        <p>
          After watching the video, click below to start the quiz and test your
          knowledge.
        </p>
        <Link to="/quiz">Start Quiz</Link>
      </div>
    </div>
  );
}

export default VideoSection;
