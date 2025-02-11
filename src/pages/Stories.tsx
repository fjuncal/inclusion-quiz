// Stories.tsx
import "./Stories.css";

const stories = [
  {
    id: 1,
    title: "Transformando Carreiras",
    content:
      "Desde que comecei a trabalhar em uma empresa que valoriza a diversidade, encontrei mais oportunidades e meu ambiente de trabalho se tornou muito mais colaborativo.",
    author: "Ana Silva",
  },
  {
    id: 2,
    title: "Quebrando Barreiras",
    content:
      "Fazer parte de um time que celebra diferentes perspectivas me fez perceber que a inclusão é essencial para o sucesso de qualquer projeto.",
    author: "Carlos Souza",
  },
  {
    id: 3,
    title: "Empoderamento e Crescimento",
    content:
      "Quando minha empresa adotou práticas inclusivas, meu crescimento profissional disparou. Sinto-me valorizado e motivado a contribuir cada vez mais.",
    author: "Mariana Oliveira",
  },
  {
    id: 4,
    title: "Diversidade que Transforma",
    content:
      "A diversidade no ambiente de trabalho nos trouxe soluções inovadoras e ajudou a criar uma cultura de respeito e colaboração.",
    author: "João Pereira",
  },
  {
    id: 5,
    title: "Inclusão é a Chave",
    content:
      "Ao promover a inclusão, nossa equipe aprendeu a valorizar as diferenças e a trabalhar unida, transformando desafios em oportunidades.",
    author: "Luiza Mendes",
  },
];

const Stories = () => {
  return (
    <div className="stories-container">
      <h1>Histórias de Inclusão</h1>
      <p>
        Depoimentos inspiradores que mostram como a diversidade pode transformar
        realidades.
      </p>
      <div className="stories-list">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <h2>{story.title}</h2>
            <p>{story.content}</p>
            <p className="author">- {story.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
