// Forum.tsx
import React, { useState, useEffect } from "react";
import "./Forum.css";

interface Comment {
  id: number;
  name: string;
  text: string;
}

function Forum() {
  // Inicializa os comentários a partir do localStorage, se houver
  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem("forumComments");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Sempre que os comentários mudarem, atualiza o localStorage
  useEffect(() => {
    localStorage.setItem("forumComments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      name,
      text,
    };
    // Adiciona o novo comentário no início da lista
    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div className="forum-container">
      <h1>Fórum de Discussão</h1>
      <p>
        Compartilhe suas experiências e opiniões sobre diversidade e inclusão na
        tecnologia.
      </p>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Seu comentário"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Enviar Comentário</button>
      </form>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>
              <strong>{comment.name}</strong>
            </p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
