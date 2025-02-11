// Quiz.tsx
import { useState } from "react";
import { questions } from "../utils/questions"; // ajuste o caminho conforme a sua estrutura
import "./Quiz.css"; // se estiver utilizando um CSS específico para o Quiz

function Quiz() {
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
