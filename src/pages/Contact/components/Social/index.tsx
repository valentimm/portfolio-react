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
      <a href={link} target="_blank">
        <div id="socialContainer">
          <img src={icon} alt={name}/>
          <div id="name">
            {name}
          </div>
        </div>
      </a>
    </ContactBox>
  )
}