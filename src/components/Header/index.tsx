import "./styles.css";
import logoImg from "../../assets/logo.png";
import { ButtonConnect } from "../Buttons/ButtonConnect";

export function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="Logo" />
      <div className="menu-items">
        <a className="item" href="#abount">Sobre</a>
        <a className="item" href="#project">Projetos</a>
        <ButtonConnect />
      </div>
    </header>
  );
}
