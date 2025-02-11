// Statistics.tsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Statistics.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mulheres", "Negros", "Outras Minorias"],
  datasets: [
    {
      label: "Representação (%)",
      data: [25, 15, 10], // Dados exemplares (dummy)
      backgroundColor: ["#646cff", "#ffa500", "#2ecc71"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Estatísticas de Diversidade na Tecnologia",
    },
  },
};

function Statistics() {
  return (
    <div className="statistics-container">
      <h1>Fatos e Estatísticas</h1>
      <p>
        Veja alguns dados que ilustram a importância da diversidade e inclusão
        no setor de tecnologia.
      </p>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Statistics;
