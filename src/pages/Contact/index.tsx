import { SocialLinks, SocialLinksProps } from "./components/Social";
import { ContactMain } from "./styles";
import mail from './assets/mail-white.svg';
import github from './assets/github-white.svg';
import linkedin from './assets/linkedin-white.svg';

export function Contact () {
  const socialLinks: SocialLinksProps[] = [
    { key: 1, name: '@valentimm', icon: github },
    { key: 2, name: '@valentimm', icon: linkedin },
    { key: 3, name: 'meduardo.valentim@gmail.com', icon: mail },
  ];
  return (
    <ContactMain>
      <h1>Contato</h1>
      <p>Entre em contato comigo através das redes sociais abaixo:</p>
      <div id="socials">
        {socialLinks.map(social => {
          return (
            <SocialLinks
              key={social.key}
              name={social.name}
              icon={social.icon}
            />
          );
        })
        }
      </div>
    </ContactMain>
  )
}