import "./styles.css";

export const Edit = () => {
  return (
    <div className="edit">
      <div className="edit-header">
        <span class="material-symbols-rounded">edit_square</span>
        <input
          className="edit-input-value"
          type="number"
          inputMode="numeric"
          min={0.1}
          step={0.01}
          defaultValue={0.0}
        />
      </div>

      <div className="edit-description">
        <span>Descrição</span>
        <div className="group">
          <span class="material-symbols-rounded">edit_note</span>
          <input
            type="text"
            className="edit-input-description"
            placeholder="Adicione a descrição"
          />
        </div>
      </div>

      <hr />

      <div className="edit-options">
        <button className="edit-button button-delete">
          <span class="material-symbols-rounded">close</span>
        </button>
        <button className="edit-button edit-button-save">
          <span class="material-symbols-rounded">save</span>
        </button>
      </div>
    </div>
  );
};
