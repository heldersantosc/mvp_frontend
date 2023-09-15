import "./styles.css";

export const Modal = ({ open, children }) => {
  return open ? <div className="modal">{children}</div> : null;
};
