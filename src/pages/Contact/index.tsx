import { SocialLinks, SocialLinksProps } from "./components/Social";
import { ContactMain } from "./styles";
import mail from './assets/mail-white.svg';
import github from './assets/github-white.svg';
import linkedin from './assets/linkedin-white.svg';
import instagram from './assets/instagram-white.svg';

export function Contact () {
  const socialLinks: SocialLinksProps[] = [
    { key: 1, name: '@valentimm', icon: github, link:'https://github.com/valentimm' },
    { key: 2, name: '@valentimm', icon: linkedin, link:'https://linkedin.com/in/valentimm' },
    { key: 3, name: 'meduardo.valentim@gmail.com', icon: mail, link:'mailto:meduardo.valentim@gmail.com' },
    { key: 4, name: '@mvalentimm', icon: instagram, link:'https://instagram.com/mvalentimm' },
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
              link={social.link}
            />
          );
        })
        }
      </div>
    </ContactMain>
  )
}