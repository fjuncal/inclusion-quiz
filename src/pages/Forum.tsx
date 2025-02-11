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
  replies: Comment[];
  showReplyForm?: boolean;
  replyName?: string;
  replyText?: string;
}

function Forum() {
  // Inicializa os comentários, garantindo que cada comentário tenha a propriedade 'replies' e 'likes'
  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem("forumComments");
    if (saved) {
      const parsed = JSON.parse(saved);
      const addDefaults = (comment: Comment): Comment => ({
        id: comment.id,
        name: comment.name,
        text: comment.text,
        timestamp: comment.timestamp,
        likes: comment.likes ?? 0,
        replies: comment.replies ? comment.replies.map(addDefaults) : [],
        showReplyForm: comment.showReplyForm || false,
        replyName: comment.replyName || "",
        replyText: comment.replyText || "",
      });
      return parsed.map(addDefaults);
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
      replies: [],
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
    const updated = updateComments(comments, commentId, (comment) => ({
      ...comment,
      likes: (comment.likes || 0) + 1,
    }));
    setComments(updated);
    toast.info("Você curtiu esse comentário!");
  };

  // Função auxiliar para atualizar um comentário (ou seus filhos) com base no id
  const updateComments = (
    comments: Comment[],
    id: number,
    updater: (comment: Comment) => Comment
  ): Comment[] => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return updater(comment);
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: updateComments(comment.replies, id, updater),
        };
      }
      return comment;
    });
  };

  const toggleReplyForm = (id: number) => {
    const updated = updateComments(comments, id, (comment) => ({
      ...comment,
      showReplyForm: !comment.showReplyForm,
      replyName: comment.replyName || "",
      replyText: comment.replyText || "",
    }));
    setComments(updated);
  };

  const handleReplyNameChange = (id: number, value: string) => {
    const updated = updateComments(comments, id, (comment) => ({
      ...comment,
      replyName: value,
    }));
    setComments(updated);
  };

  const handleReplyTextChange = (id: number, value: string) => {
    const updated = updateComments(comments, id, (comment) => ({
      ...comment,
      replyText: value,
    }));
    setComments(updated);
  };

  // Função auxiliar para adicionar uma resposta ao comentário com id = parentId
  const addReply = (comments: Comment[], parentId: number): Comment[] => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        const newReply: Comment = {
          id: Date.now(),
          name: comment.replyName ? comment.replyName : "Anônimo",
          text: comment.replyText || "",
          timestamp: Date.now(),
          likes: 0,
          replies: [],
        };
        return {
          ...comment,
          replies: [...comment.replies, newReply],
          showReplyForm: false,
          replyName: "",
          replyText: "",
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return { ...comment, replies: addReply(comment.replies, parentId) };
      }
      return comment;
    });
  };

  const handleReplySubmit = (id: number) => {
    const updated = addReply(comments, id);
    setComments(updated);
    toast.success("Resposta enviada com sucesso!");
  };

  // Função recursiva para renderizar um comentário e suas respostas (encadeadas)
  const renderComment = (comment: Comment) => {
    return (
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
            ❤️
          </button>
          <span className="like-count">{comment.likes}</span>
        </div>
        <button
          onClick={() => toggleReplyForm(comment.id)}
          className="reply-button"
        >
          Responder
        </button>
        {comment.showReplyForm && (
          <div className="reply-form">
            <input
              type="text"
              placeholder="Seu nome"
              value={comment.replyName || ""}
              onChange={(e) =>
                handleReplyNameChange(comment.id, e.target.value)
              }
              className="reply-input"
              required
            />
            <textarea
              placeholder="Sua resposta"
              value={comment.replyText || ""}
              onChange={(e) =>
                handleReplyTextChange(comment.id, e.target.value)
              }
              className="reply-textarea"
              required
            ></textarea>
            <button
              onClick={() => handleReplySubmit(comment.id)}
              className="submit-reply-button"
            >
              Enviar Resposta
            </button>
          </div>
        )}
        {comment.replies && comment.replies.length > 0 && (
          <div className="replies">
            {comment.replies.map((reply) => renderComment(reply))}
          </div>
        )}
      </div>
    );
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
        {comments.map((comment) => renderComment(comment))}
      </div>
    </div>
  );
}

export default Forum;
