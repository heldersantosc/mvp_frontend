import "./styles.css";

export const Footer = ({ setModal }) => {
  return (
    <footer>
      <button className="footer-button">
        <span class="material-symbols-rounded">edit_square</span>
      </button>
      <button
        className="footer-button button-add"
        onClick={() => setModal(true)}
      >
        <span class="material-symbols-rounded">add</span>
      </button>
      <button className="footer-button">
        <span class="material-symbols-rounded">delete</span>
      </button>
    </footer>
  );
};

<span class="material-icons-outlined">delete</span>;
