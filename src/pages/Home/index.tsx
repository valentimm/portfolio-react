import { HomeMain } from "./styles"
import { TypeAnimation } from "react-type-animation";

export function Home () {
  return (
    <HomeMain>
      <div id="container">
        <div className="infos">
          <h1>Olá, eu sou o</h1>
          <h2>Matheus Valentim :)</h2>
          <TypeAnimation
            cursor={true}
            sequence={[
              'Desenvolvedor Front-end',
              2000,
              'Desenvolvedor Mobile',
              2000,
              'Desenvolvedor Python',
              2000,
            ]}
            speed={50}
            wrapper="p"
            repeat={Infinity}
          />
          <div className="buttons">
            <button id="home_button" >
              <a href="/Currículo-MatheusValentim.pdf" download="Matheus Valentim - Currículo.pdf">Baixar CV</a>
            </button>
            <button id="home_button">
              <a href="mailto:meduardo.valentim@gmail.com">Fale comigo</a>
            </button>
          </div>
        </div>
        <div className="img">
          <img src="https://github.com/valentimm.png" alt="Matheus Valentim" />
        </div>
      </div>
    </HomeMain>
  )
}