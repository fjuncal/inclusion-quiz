// Timeline.tsx
import "./Timeline.css";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "1960",
    title: "Direitos Civis",
    description:
      "A luta pelos direitos civis impulsiona a discussão sobre igualdade no trabalho, preparando o terreno para futuras iniciativas de inclusão.",
  },
  {
    date: "1970",
    title: "Inclusão Feminina",
    description:
      "Iniciativas pioneiras começam a promover a participação de mulheres na área de computação.",
  },
  {
    date: "1980",
    title: "Organizações de Apoio",
    description:
      "Grupos de apoio e organizações focadas em diversidade começam a surgir no setor de tecnologia.",
  },
  {
    date: "1990",
    title: "Programas Educacionais",
    description:
      "Iniciativas educacionais voltadas à diversidade se consolidam, incentivando novas gerações a ingressar na tecnologia.",
  },
  {
    date: "2000",
    title: "Políticas Corporativas",
    description:
      "Grandes empresas começam a adotar políticas de diversidade e inclusão, transformando a cultura corporativa.",
  },
  {
    date: "2010",
    title: "Eventos e Conferências",
    description:
      "O setor de tecnologia passa a reconhecer a importância da diversidade por meio de eventos e conferências dedicadas.",
  },
  {
    date: "2020",
    title: "Reconhecimento Global",
    description:
      "A diversidade e inclusão são amplamente celebradas, com esforços contínuos para promover a equidade no mercado de trabalho.",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1>Linha do Tempo da Inclusão na Tecnologia</h1>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
