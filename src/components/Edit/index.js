import "./styles.css";

import React from "react";

export const Edit = ({
  value,
  description,
  setModal,
  setValue,
  setDescription,
  clearInput,
  createExpense,
}) => {
  const handleCloseClick = () => {
    setModal(false);
    clearInput();
  };

  return (
    <form
      className="edit"
      onSubmit={createExpense}
      encType="multipart/form-data"
    >
      <div className="edit-header">
        <span class="material-symbols-rounded">edit_square</span>
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
          <span class="material-symbols-rounded">edit_note</span>
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
        <button className="edit-button" onClick={() => handleCloseClick()}>
          <span class="material-symbols-rounded">close</span>
        </button>
        <button className="edit-button edit-button-save" type="submit">
          <span class="material-symbols-rounded">save</span>
        </button>
      </div>
    </form>
  );
};
