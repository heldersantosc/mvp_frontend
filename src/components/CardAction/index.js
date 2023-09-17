import "./styles.css";

import React from "react";

export const CardAction = ({
  visible,
  value,
  description,
  setValue,
  setDescription,
  handleCloseClick,
  handleAction,
}) => {
  return visible ? (
    <form
      className="edit"
      onSubmit={handleAction}
      encType="multipart/form-data"
    >
      <div className="edit-header">
        <span className="material-symbols-rounded">edit_square</span>
        <input
          autoFocus
          name="value"
          id="edit-input-value"
          className="edit-input-value"
          type="number"
          min={0.1}
          step={0.01}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>

      <div className="edit-description">
        <span>Descrição</span>
        <div className="group">
          <span className="material-symbols-rounded">edit_note</span>
          <input
            type="text"
            name="description"
            id="edit-input-description"
            className="edit-input-description"
            placeholder="Adicione a descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
      </div>

      <hr />

      <div className="edit-options">
        <button className="button w100" onClick={() => handleCloseClick()}>
          <span className="material-symbols-rounded">close</span>
        </button>
        <button className="button button-save w100" type="submit">
          <span className="material-symbols-rounded">save</span>
        </button>
      </div>
    </form>
  ) : null;
};
