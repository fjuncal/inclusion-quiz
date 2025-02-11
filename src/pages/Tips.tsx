// Tips.tsx
import "./Tips.css";

const tips = [
  {
    id: 1,
    title: "Promova a Diversidade na Contratação",
    description:
      "Adote práticas de recrutamento que valorizem diferentes trajetórias e experiências, ampliando a diversidade no ambiente de trabalho.",
  },
  {
    id: 2,
    title: "Incentive a Inclusão no Dia a Dia",
    description:
      "Crie um ambiente onde todos se sintam à vontade para expressar suas ideias e opiniões, promovendo uma cultura de respeito e colaboração.",
  },
  {
    id: 3,
    title: "Ofereça Treinamentos e Workshops",
    description:
      "Capacite sua equipe com treinamentos sobre vieses inconscientes e diversidade, fortalecendo o conhecimento sobre práticas inclusivas.",
  },
  {
    id: 4,
    title: "Valorize as Diferenças",
    description:
      "Celebre as singularidades de cada colaborador, reconhecendo que diferentes perspectivas impulsionam soluções inovadoras.",
  },
  {
    id: 5,
    title: "Implemente Políticas de Inclusão",
    description:
      "Desenvolva e implemente políticas claras que promovam a igualdade de oportunidades e o combate à discriminação.",
  },
  {
    id: 6,
    title: "Fomente Espaços de Diálogo",
    description:
      "Estimule a comunicação aberta, permitindo que os colaboradores compartilhem experiências e sugestões para um ambiente melhor.",
  },
  {
    id: 7,
    title: "Incentive Programas de Mentoria",
    description:
      "Crie iniciativas de mentoring para conectar colaboradores experientes a novos talentos, promovendo troca de conhecimento.",
  },
  {
    id: 8,
    title: "Promova a Equidade Salarial",
    description:
      "Assegure que todos tenham acesso a oportunidades e remuneração justa, independentemente de gênero, raça ou origem.",
  },
  {
    id: 9,
    title: "Estabeleça Feedback Constante",
    description:
      "Crie canais para feedback construtivo, incentivando a melhoria contínua e a adaptação às necessidades do time.",
  },
  {
    id: 10,
    title: "Reconheça e Celebre Conquistas",
    description:
      "Valorize os esforços individuais e coletivos, reforçando a importância de um ambiente inclusivo para o sucesso geral.",
  },
];

const Tips = () => {
  return (
    <div className="tips-container">
      <h1>Dicas para Promover a Inclusão</h1>
      <p>
        Confira algumas práticas e recomendações que podem ajudar a construir
        ambientes mais inclusivos e justos.
      </p>
      <div className="tips-list">
        {tips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <h2>{tip.title}</h2>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
