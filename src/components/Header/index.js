import "./styles.css";

import avatar from "../../assets/avatar.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="user">
        <img className="avatar" src={avatar} alt="avatar" />
        <h3 className="name">Olá, Helder!</h3>
      </div>
    </div>
  );
};
