import { Link } from "react-router-dom";

function VideoSection() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>
        Bem-vindo(a) ao Quiz de Inclusão: Construindo Pontes para a Diversidade
      </h1>
      <p>
        Neste espaço, convidamos você a refletir sobre a importância da
        diversidade e da inclusão no universo da tecnologia. Assista ao vídeo
        abaixo para conhecer histórias e desafios enfrentados por grupos
        minoritários, e descubra como a união de diferentes perspectivas pode
        impulsionar a inovação.
      </p>

      {/* Exemplo de iframe com um vídeo (troque pela URL de um vídeo sobre inclusão) */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YmPIddAml1A"
        title="Vídeo Educativo"
        allowFullScreen
      />

      <div style={{ marginTop: "1rem" }}>
        <p>
          Após assistir ao vídeo, clique no botão abaixo para iniciar o quiz e
          testar seus conhecimentos, contribuindo para a construção de um
          ambiente tecnológico mais justo e acolhedor.
        </p>
        <Link to="/quiz">Iniciar Quiz</Link>
      </div>
    </div>
  );
}

export default VideoSection;
