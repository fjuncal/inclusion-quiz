// Forum.tsx
import React, { useState, useEffect } from "react";
import "./Forum.css";
import ClearCommentsModal from "../components/ClearCommentsModal";

interface Comment {
  id: number;
  name: string;
  text: string;
  timestamp: number;
}

function Forum() {
  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem("forumComments");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("forumComments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      name,
      text,
      timestamp: Date.now(),
    };
    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  const handleClearComments = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = (password: string) => {
    if (password === "minhaSenhaSecreta") {
      setComments([]);
      localStorage.removeItem("forumComments");
      setIsModalOpen(false);
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
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
      <button onClick={handleClearComments} className="clear-button">
        Limpar Comentários
      </button>
      {isModalOpen && (
        <ClearCommentsModal
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
        />
      )}
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>
              <strong>{comment.name}</strong>{" "}
              <small>{new Date(comment.timestamp).toLocaleString()}</small>
            </p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
