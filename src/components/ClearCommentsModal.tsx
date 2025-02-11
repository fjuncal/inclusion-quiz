import React, { useState } from "react";
import "./ClearCommentsModal.css";

interface ClearCommentsModalProps {
  onClose: () => void;
  onConfirm: (password: string) => void;
  errorMessage?: string;
}

const ClearCommentsModal: React.FC<ClearCommentsModalProps> = ({
  onClose,
  onConfirm,
  errorMessage,
}) => {
  const [password, setPassword] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Confirmar Limpeza</h2>
        <p>Digite a senha para limpar os comentários:</p>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="modal-buttons">
          <button onClick={() => onConfirm(password)}>Confirmar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ClearCommentsModal;
