import "./styles.css";
import { ButtonConnect } from "../Buttons/ButtonConnect";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <h1>Quer que trabalhemos <br /> juntos em um projeto?</h1>
        <ButtonConnect />
      </div>

      <div className="line"></div>
      <p className="copyright">Copyright © {year}. Fox Software.</p>
    </footer>
  );
}
