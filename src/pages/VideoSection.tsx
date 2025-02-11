import { Link } from "react-router-dom";

function VideoSection() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Bem-vindo(a) ao Quiz de Inclusão</h1>
      <p>
        Aqui você vai aprender sobre diversidade, inclusão e os desafios
        enfrentados por grupos minoritários na área de tecnologia. Assista ao
        vídeo abaixo para começar.
      </p>

      {/* Exemplo de iframe com um vídeo (troque pela URL de um vídeo sobre inclusão) */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Vídeo Educativo"
        allowFullScreen
      />

      <div style={{ marginTop: "1rem" }}>
        <p>
          Depois de assistir ao vídeo, clique no botão abaixo para iniciar o
          quiz e testar seus conhecimentos.
        </p>
        <Link to="/quiz">Iniciar Quiz</Link>
      </div>
    </div>
  );
}

export default VideoSection;
