import "./styles.css";
import logoImg from "../../assets/logo.png";
import { ButtonConnect } from "../Buttons/ButtonConnect";
import { useEffect, useState } from "react";

export function Header() {

  const [header, setHeader] = useState("")

  const listenScrollEvent = (event: Event) => {
    if (window.scrollY < 73) {
      return setHeader("")
    } else if (window.scrollY > 70) {
      return setHeader("#FFF")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header>
      <div className="header" style={{ background: header !== "" ? header : header }}>
        <img src={logoImg} alt="Logo" />
        <div className="menu-items">
          <a className="item" href="#abount">Sobre</a>
          <a className="item" href="#project">Projetos</a>
          <a className="item" href="#testimonials">Testemunhas</a>
          <ButtonConnect />
        </div>
      </div>
    </header>
  );
}
