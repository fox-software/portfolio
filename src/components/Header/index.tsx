import logoImg from "../../assets/logo.png";

import "../Header/styles.css";

export function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="Logo" />
      <div className="menu-items">
        <a className="item" href="#abount">Sobre</a>
        <a className="item" href="#project">Projetos</a>
        <button className="btn-connect">Vamos nos conectar</button>
      </div>
    </header>
  );
}
