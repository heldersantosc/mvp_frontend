import "./styles.css";

import React from "react";

export const ConfirmAction = ({ visible, handleCloseClick, handleAction }) => {
  return visible ? (
    <div className="confirm" onSubmit={handleAction}>
      <div className="confirm-title">
        <h2>Você deseja realmente excluir este item?</h2>
      </div>

      <div className="confirm-options">
        <button className="button w100" onClick={() => handleCloseClick()}>
          <span className="material-symbols-rounded">close</span>
        </button>
        <button
          className="button button-delete w100"
          onClick={() => handleAction()}
        >
          <span className="material-symbols-rounded">delete</span>
        </button>
      </div>
    </div>
  ) : null;
};
