// questions.ts

export interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}

export interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

export const questions: Question[] = [
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
