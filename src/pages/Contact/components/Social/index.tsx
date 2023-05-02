import { ContactBox } from "./styles";

export interface SocialLinksProps {
  key: number;
  name: string;
  icon: string;
  link: string;
}

export function SocialLinks ({ name, icon, link }: SocialLinksProps) {
  return (
    <ContactBox>
      <div id="socialContainer">
        <a href={link} target="_blank">
          <img src={icon} alt={name}/>
        </a>
      </div>
        <div id="name">
          {name}
        </div>
    </ContactBox>
  )
}