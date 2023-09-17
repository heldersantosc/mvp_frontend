import './styles.css';

export const Footer = ({ setModal, setOption }) => {
  return (
    <footer>
      <button className="button" onClick={() => setOption('edit')}>
        <span className="material-symbols-rounded">edit_square</span>
      </button>
      <button
        className="button button-add"
        onClick={() => {
          setOption('read');
          setModal(true);
        }}
      >
        <span className="material-symbols-rounded">add</span>
      </button>
      <button className="button" onClick={() => setOption('delete')}>
        <span className="material-symbols-rounded">delete</span>
      </button>
    </footer>
  );
};
