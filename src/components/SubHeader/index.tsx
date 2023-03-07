import "./styles.css";

import experienceImg from "../../assets/experience.svg";
import customersImg from "../../assets/customers.svg";
import prizesImg from "../../assets/prizes.svg";
import projectsImg from "../../assets/projects.svg";

import { ButtonConnect } from "../Buttons/ButtonConnect";

export function SubHeader() {
  return (
    <div className="subheader" id="abount">
      <div className="subheader-container">
        <div className="welcome">
          <p>Olá, sejam bem-vindos à</p>
          <h1>Fox Software</h1>
          <p>Eu sou uma <span className="company-sector">Software House</span></p>
          <div className="abount">
            <p>
              A Fox é uma startup de tecnologia que tem como foco a inovação.
              Por meio de desenvolvimento de aplicações mobile e web, visamos
              sempre performance e excelência em tudo que fazemos. Buscamos
              proporcionar uma boa experiência aos usuários dos nossos
              aplicativos e satisfação total dos clientes.
            </p>
          </div>
          <ButtonConnect />
        </div>
        <div className="capa">

          <div className="tag tag-experience">
            <img src={experienceImg} alt="Anos de Experiência" />
            <div>
              <p>Anos de Experiência</p>
              <h2>4+</h2>
            </div>
          </div>

          <div className="tag tag-customers">
            <img src={customersImg} alt="Clientes satisfeitos" />
            <div>
              <p>Clientes satisfeitos</p>
              <h2>10</h2>
            </div>
          </div>

          <div className="tag tag-prizes">
            <img src={prizesImg} alt="Prêmios recebidos" />
            <div>
              <p>Prêmios recebidos</p>
              <h2>1</h2>
            </div>
          </div>

          <div className="tag tag-projects">
            <img src={projectsImg} alt="Projetos Concluídos" />
            <div>
              <p>Projetos Concluídos</p>
              <h2>10+</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
