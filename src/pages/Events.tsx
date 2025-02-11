// Events.tsx
import "./Events.css";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  link?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Webinar: A Importância da Inclusão na Tecnologia",
    date: "15/03/2025",
    description:
      "Uma conversa com especialistas sobre como ambientes inclusivos impulsionam a inovação.",
    link: "https://example.com/webinar1",
  },
  {
    id: 2,
    title: "Workshop: Ferramentas para Combater o Viés Inconsciente",
    date: "25/03/2025",
    description:
      "Aprenda técnicas e práticas para promover a igualdade no ambiente de trabalho.",
    link: "https://example.com/workshop",
  },
  {
    id: 3,
    title: "Hackathon: Soluções Inovadoras para Inclusão",
    date: "05/04/2025",
    description:
      "Junte-se a times multidisciplinares e desenvolva projetos que promovam a diversidade.",
    link: "https://example.com/hackathon",
  },
  // Adicione mais eventos conforme necessário
];

function Events() {
  return (
    <div className="events-container">
      <h1>Eventos e Oportunidades</h1>
      <p>
        Confira os próximos eventos e oportunidades voltados para a promoção da
        diversidade e inclusão no setor de tecnologia.
      </p>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-header">
              <h2>{event.title}</h2>
              <span className="event-date">{event.date}</span>
            </div>
            <p>{event.description}</p>
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Saiba mais
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
