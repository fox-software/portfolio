import "./styles.css";
import { ButtonContact } from "../Buttons/ButtonContact";

import { EnvelopeSimple, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

export function SocialMedia() {
  return (
    <div className="socialmedia-container">
      <p className="title">Redes para contato</p>
      <div className="socialmedia-content">
        <ButtonContact text="E-mail" icon={EnvelopeSimple} link="mailto:foxsoftware21@gmail.com" />
        <ButtonContact text="LinkedIn" icon={LinkedinLogo} link="https://www.linkedin.com/company/fox-software" />
        <ButtonContact text="Github" icon={GithubLogo} link="https://github.com/fox-software" />
      </div>
    </div>
  );
}
