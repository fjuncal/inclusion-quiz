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
      { answerText: "Homens em geral", isCorrect: false },
      { answerText: "Ninguém é sub-representado", isCorrect: false },
      { answerText: "Mulheres e minorias", isCorrect: true },
      { answerText: "Somente idosos", isCorrect: false },
    ],
  },
  {
    questionText: "A diversidade em equipes de tecnologia pode gerar:",
    answerOptions: [
      { answerText: "Mais conflitos sem benefícios", isCorrect: false },
      { answerText: "Melhor criatividade e inovação", isCorrect: true },
      { answerText: "Queda de produtividade", isCorrect: false },
      { answerText: "Nenhuma diferença significativa", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qual dos seguintes benefícios está associado à inclusão de diferentes perspectivas em equipes?",
    answerOptions: [
      { answerText: "Processos mais lentos", isCorrect: false },
      { answerText: "Redução de criatividade", isCorrect: false },
      { answerText: "Maior inovação e soluções criativas", isCorrect: true },
      { answerText: "Aumento de conflitos internos", isCorrect: false },
    ],
  },
  {
    questionText:
      "Por que é importante incentivar a participação de mulheres na área de STEM?",
    answerOptions: [
      { answerText: "Para diversificar ideias e soluções", isCorrect: true },
      { answerText: "Apenas para cumprir metas", isCorrect: false },
      { answerText: "Porque há excesso de candidatas", isCorrect: false },
      { answerText: "Porque homens já dominam a área", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qual a importância de políticas de inclusão no ambiente corporativo?",
    answerOptions: [
      { answerText: "Aumentar a burocracia", isCorrect: false },
      { answerText: "Promover igualdade de oportunidades", isCorrect: true },
      {
        answerText: "Criar ambientes excessivamente competitivos",
        isCorrect: false,
      },
      { answerText: "Manter o status quo", isCorrect: false },
    ],
  },
  {
    questionText: "Como a inclusão beneficia as empresas de tecnologia?",
    answerOptions: [
      { answerText: "Aumentando os custos operacionais", isCorrect: false },
      { answerText: "Reduzindo a eficiência", isCorrect: false },
      { answerText: "Diminuindo o número de ideias", isCorrect: false },
      {
        answerText: "Impulsionando a inovação e a competitividade",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Qual é um dos principais desafios enfrentados por minorias na área de tecnologia?",
    answerOptions: [
      { answerText: "Excesso de promoções", isCorrect: false },
      {
        answerText: "Acesso limitado a oportunidades de crescimento",
        isCorrect: true,
      },
      { answerText: "Ambiente de trabalho muito diverso", isCorrect: false },
      { answerText: "Falta de interesse pelo setor", isCorrect: false },
    ],
  },
  {
    questionText:
      "Que impacto a diversidade tem sobre a resolução de problemas?",
    answerOptions: [
      { answerText: "Torna os processos mais confusos", isCorrect: false },
      { answerText: "Não tem impacto significativo", isCorrect: false },
      {
        answerText: "Aumenta a capacidade de encontrar soluções inovadoras",
        isCorrect: true,
      },
      { answerText: "Diminui a qualidade das soluções", isCorrect: false },
    ],
  },
  {
    questionText:
      "Como a inclusão de diferentes perspectivas pode ajudar na tomada de decisão?",
    answerOptions: [
      { answerText: "Criando conflitos desnecessários", isCorrect: false },
      { answerText: "Através de decisões unilaterais", isCorrect: false },
      { answerText: "Por meio de processos burocráticos", isCorrect: false },
      {
        answerText: "Proporcionando visões variadas e mais embasadas",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Qual destas iniciativas é fundamental para promover a diversidade nas empresas?",
    answerOptions: [
      {
        answerText: "Contratação baseada somente em recomendações pessoais",
        isCorrect: false,
      },
      { answerText: "Promoções exclusivas internas", isCorrect: false },
      { answerText: "Foco apenas em metas de lucro", isCorrect: false },
      { answerText: "Programas de mentoria e capacitação", isCorrect: true },
    ],
  },
  {
    questionText:
      "Qual fator pode contribuir para a falta de diversidade em tecnologia?",
    answerOptions: [
      { answerText: "Altos salários", isCorrect: false },
      {
        answerText: "Ambiente de trabalho excessivamente colaborativo",
        isCorrect: false,
      },
      { answerText: "Preconceitos inconscientes", isCorrect: true },
      { answerText: "Investimentos em capacitação", isCorrect: false },
    ],
  },
  {
    questionText:
      "Como a educação pode influenciar a inclusão no setor de tecnologia?",
    answerOptions: [
      { answerText: "Reduzindo o interesse pelo setor", isCorrect: false },
      {
        answerText: "Promovendo o acesso a oportunidades e a conscientização",
        isCorrect: true,
      },
      { answerText: "Criando barreiras ao acesso", isCorrect: false },
      {
        answerText: "Enfatizando a competição entre os alunos",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Qual é o papel da liderança na promoção de ambientes inclusivos?",
    answerOptions: [
      { answerText: "Ignorar as questões de diversidade", isCorrect: false },
      {
        answerText: "Manter estruturas hierárquicas rígidas",
        isCorrect: false,
      },
      {
        answerText: "Priorizar somente resultados financeiros",
        isCorrect: false,
      },
      {
        answerText: "Definir e implementar políticas inclusivas",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Por que a diversidade é um fator estratégico para as empresas de tecnologia?",
    answerOptions: [
      { answerText: "Porque torna os processos mais lentos", isCorrect: false },
      {
        answerText: "Porque impulsiona a inovação e a competitividade",
        isCorrect: true,
      },
      {
        answerText: "Por não ter impacto real nos resultados",
        isCorrect: false,
      },
      {
        answerText: "Por ser apenas uma tendência passageira",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Qual iniciativa pode ajudar a reduzir o viés inconsciente no recrutamento?",
    answerOptions: [
      {
        answerText: "Foco exclusivo em currículos tradicionais",
        isCorrect: false,
      },
      { answerText: "Eliminação de processos seletivos", isCorrect: false },
      {
        answerText: "Treinamento e conscientização sobre diversidade",
        isCorrect: true,
      },
      { answerText: "Contratação sem critérios definidos", isCorrect: false },
    ],
  },
];
