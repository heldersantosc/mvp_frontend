import "./styles.css";

import avatar from "../../assets/avatar.svg";

export const Header = () => {
  return (
    <header>
      <div className="user">
        <img className="avatar" src={avatar} alt="avatar" />
        <h3>Olá, Helder!</h3>
      </div>
    </header>
  );
};
