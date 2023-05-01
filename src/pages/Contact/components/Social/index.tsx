import { ContactBox } from "./styles";

export interface SocialLinksProps {
  key: number;
  name: string;
  icon: string;
}

export function SocialLinks ({ name, icon }: SocialLinksProps) {
  return (
    <ContactBox>
      <div id="socialContainer">
        <img src={icon} alt={name} />
      </div>
        {name}
    </ContactBox>
  )
}