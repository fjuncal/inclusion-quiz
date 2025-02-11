import { useState } from "react";

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
      questionText: "Which group is underrepresented in tech?",
      answerOptions: [
        { answerText: "Women and minorities", isCorrect: true },
        { answerText: "Everyone is equally represented", isCorrect: false },
        { answerText: "None", isCorrect: false },
        { answerText: "Men in general", isCorrect: false },
      ],
    },
    // Adicione mais perguntas aqui
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
    <div style={{ padding: "1rem" }}>
      <h1>Inclusion Quiz</h1>
      {showScore ? (
        <div>
          <p>
            You scored {score} out of {questions.length}
          </p>
          {/* Mensagem de conscientização */}
          <p>
            Remember, diversity and inclusion are essential for innovation in
            technology!
          </p>
        </div>
      ) : (
        <>
          <div>
            <p>
              Question {currentQuestion + 1}/{questions.length}
            </p>
            <p>{questions[currentQuestion].questionText}</p>
          </div>
          <div>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  style={{ display: "block", margin: "0.5rem 0" }}
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
