import { useState } from "react";
import "./Quiz.css"; // Certifique-se de que o caminho está correto

interface Question {
  questionText: string;
  answerOptions: {
    answerText: string;
    isCorrect: boolean;
  }[];
}

function Quiz() {
  const questions: Question[] = [
    {
      questionText: "Qual grupo é sub-representado na área de tecnologia?",
      answerOptions: [
        { answerText: "Mulheres e minorias", isCorrect: true },
        { answerText: "Homens em geral", isCorrect: false },
        { answerText: "Ninguém é sub-representado", isCorrect: false },
        { answerText: "Somente idosos", isCorrect: false },
      ],
    },
    {
      questionText: "A diversidade em equipes de tecnologia pode gerar:",
      answerOptions: [
        { answerText: "Melhor criatividade e inovação", isCorrect: true },
        { answerText: "Mais conflitos sem benefícios", isCorrect: false },
        { answerText: "Queda de produtividade", isCorrect: false },
        { answerText: "Nenhuma diferença significativa", isCorrect: false },
      ],
    },
    // Adicione mais perguntas conforme desejar
  ];

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz de Inclusão</h1>
      {showScore ? (
        <div>
          <p>
            Você acertou {score} de {questions.length} perguntas.
          </p>
          <p>
            Lembre-se de que diversidade e inclusão são fundamentais para a
            inovação na tecnologia!
          </p>
        </div>
      ) : (
        <>
          <div className="question-container">
            <p>
              Pergunta {currentQuestion + 1}/{questions.length}
            </p>
            <p>{questions[currentQuestion].questionText}</p>
          </div>
          <div className="answers-container">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  className="answer-button"
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
