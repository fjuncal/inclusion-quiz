// ClearCommentsModal.tsx
import React, { useState } from "react";
import "./ClearCommentsModal.css";

interface ClearCommentsModalProps {
  onClose: () => void;
  onConfirm: (password: string) => void;
}

const ClearCommentsModal: React.FC<ClearCommentsModalProps> = ({
  onClose,
  onConfirm,
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
        <div className="modal-buttons">
          <button onClick={() => onConfirm(password)}>Confirmar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ClearCommentsModal;
