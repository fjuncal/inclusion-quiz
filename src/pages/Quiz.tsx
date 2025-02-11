import { useState } from "react";
import { questions } from "../utils/questions";
import "./Quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  const handleAnswerOptionClick = (isCorrect: boolean, index: number) => {
    if (selectedAnswerIndex !== null) return;

    setSelectedAnswerIndex(index);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswerIndex(null);
      } else {
        setShowScore(true);
      }
    }, 2000);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz de Inclusão</h1>
      {showScore ? (
        <div className="score-section">
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
              (answerOption, index) => {
                let buttonClass = "answer-button";
                // Se o usuário já escolheu uma resposta, define as classes para feedback
                if (selectedAnswerIndex !== null) {
                  if (answerOption.isCorrect) {
                    buttonClass += " correct";
                  } else if (
                    index === selectedAnswerIndex &&
                    !answerOption.isCorrect
                  ) {
                    buttonClass += " incorrect";
                  }
                }
                return (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect, index)
                    }
                    className={buttonClass}
                    disabled={selectedAnswerIndex !== null}
                  >
                    {answerOption.answerText}
                  </button>
                );
              }
            )}
          </div>
          {selectedAnswerIndex !== null && (
            <div className="feedback">
              {questions[currentQuestion].answerOptions[selectedAnswerIndex]
                .isCorrect ? (
                <p>Correto!</p>
              ) : (
                <p>
                  Incorreto! A resposta certa é:{" "}
                  {
                    questions[currentQuestion].answerOptions.find(
                      (option) => option.isCorrect
                    )?.answerText
                  }
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
