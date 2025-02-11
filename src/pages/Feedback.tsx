import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Feedback.css";

function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Feedback enviado com sucesso!");
  };

  return (
    <div className="feedback-container">
      <h1>Feedback e Sugestões</h1>
      {submitted ? (
        <p>
          Obrigado, {name}! Seu feedback foi enviado com sucesso. Agradecemos
          sua contribuição para tornar nosso projeto cada vez melhor.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Seu nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Seu Feedback:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar Feedback</button>
        </form>
      )}
    </div>
  );
}

export default Feedback;
