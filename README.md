# Quiz de Inclusão

O **Quiz de Inclusão** é uma aplicação web interativa desenvolvida com **React**, **TypeScript** e **Vite**, com o objetivo de promover a conscientização sobre diversidade e inclusão na área de tecnologia. A aplicação oferece:

- Um quiz interativo com feedback imediato (toasts de acerto/erro);
- Um fórum com respostas encadeadas e curtidas;
- Suporte a tema claro/escuro;
- Notificações in-app;
- Uma seção de comentários destaque.

## Funcionalidades

- **Quiz Interativo:**  
  Teste seus conhecimentos sobre diversidade e inclusão com feedback imediato.

- **Fórum de Discussão:**  
  Envie comentários, responda a outros usuários (respostas encadeadas) e curta os comentários.

- **Tema Claro/Escuro:**  
  Visualização adaptável que permite alternar entre modos claro e escuro, melhorando a experiência de leitura.

- **Notificações In-App:**  
  Toasts informam o usuário sobre ações realizadas, como envio de comentários, curtidas, respostas e limpeza de comentários com verificação de senha.

- **Comentários Destaque:**  
  Seção que exibe os comentários com mais curtidas, incentivando as contribuições mais relevantes.

## Tecnologias Utilizadas

- **React** com **TypeScript** – Desenvolvimento da interface do usuário.
- **Vite** – Ferramenta de build e desenvolvimento rápido.
- **React Toastify** – Notificações in-app elegantes.
- **CSS** – Estilização responsiva com suporte a temas claro e escuro.
- **LocalStorage** – Persistência de dados (comentários e respostas).

## Deploy

A aplicação está disponível em:  
[https://inclusion-quiz.vercel.app/](https://inclusion-quiz.vercel.app/)

## Instalação

Para executar a aplicação localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/inclusion-quiz.git
   cd inclusion-quiz
   ```

   Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run
```

Abra http://localhost:3000 no seu navegador para acessar a aplicação.

Estrutura do Projeto
src/
components/ – Componentes reutilizáveis (ex: NavBar, ClearCommentsModal).
pages/ – Páginas principais (ex: VideoSection, Quiz, Forum, etc.).
utils/ – Dados e funções auxiliares (ex: perguntas do quiz).
public/ – Arquivos públicos, como index.html.
Contribuição
Contribuições são bem-vindas! Se você deseja colaborar, sinta-se à vontade para abrir issues ou enviar pull requests.

Licença
Este projeto está licenciado sob a Licença MIT.
