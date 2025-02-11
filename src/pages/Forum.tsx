import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./Forum.css";
import ClearCommentsModal from "../components/ClearCommentsModal";

interface Comment {
  id: number;
  name: string;
  text: string;
  timestamp: number;
  likes: number;
}

function Forum() {
  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem("forumComments");
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((comment: Comment) => ({
        ...comment,
        likes: comment.likes ?? 0,
      }));
    }
    return [];
  });
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalError, setModalError] = useState("");

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
      likes: 0,
    };
    setComments([newComment, ...comments]);
    setName("");
    setText("");
    toast.success("Comentário enviado com sucesso!");
  };

  const handleClearComments = () => {
    setModalError("");
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalError("");
  };

  const handleModalConfirm = (password: string) => {
    if (password === "777") {
      setComments([]);
      localStorage.removeItem("forumComments");
      setIsModalOpen(false);
      setModalError("");
      toast.info("Comentários limpos!");
    } else {
      setModalError("Senha incorreta. Tente novamente.");
      toast.error("Senha incorreta. Tente novamente.");
    }
  };

  const handleLike = (commentId: number) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, likes: (comment.likes || 0) + 1 }
        : comment
    );
    setComments(updatedComments);
    toast.info("Você curtiu esse comentário!");
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
          errorMessage={modalError}
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
            <div className="comment-reactions">
              <button
                onClick={() => handleLike(comment.id)}
                className="like-button"
              >
                {/* Alterado para um ícone de coração */}
                ❤️
              </button>
              <span className="like-count">{comment.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
