// Resources.tsx
function Resources() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Recursos e Informações</h1>
      <p>
        A seguir, selecionamos uma lista de recursos que podem ajudar a ampliar
        seu conhecimento sobre diversidade, inclusão e os desafios enfrentados
        por minorias na tecnologia.
      </p>
      <ul>
        <li>
          <a
            href="https://www.unwomen.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ONU Mulheres
          </a>
        </li>
        <li>
          <a
            href="https://www.diversityintech.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diversity in Tech
          </a>
        </li>
        <li>
          <a
            href="https://www.handtalk.me/br/blog/tecnologia-e-inclusao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artigo Sobre Tecnologia e Inclusão: importância e desafios
          </a>
        </li>
        {/* Adicione mais recursos conforme desejar */}
      </ul>
    </div>
  );
}

export default Resources;
