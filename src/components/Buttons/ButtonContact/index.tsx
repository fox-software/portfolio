import "../ButtonContact/styles.css";
import { IconProps } from "@phosphor-icons/react";

interface Props {
  text: string;
  link: string;
  icon: React.ElementType<IconProps>;
}
export function ButtonContact({ text, link, icon: Icon }: Props) {
  return (
    <a href={link} className="btn-contact" target="_blank" rel="noreferrer">
      <Icon className="btn-contact-icon" />
      {text}
    </a>
  );
}
