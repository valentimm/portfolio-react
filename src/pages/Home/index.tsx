import { HomeMain } from "./styles"
import { saveAs } from 'file-saver';

function handleDownload() {
  const pdfUrl = './assets/D.pdf'; // Insira a URL do arquivo PDF que deseja baixar
  const pdfFileName = 'o.pdf'; // Insira o nome que deseja dar ao arquivo PDF baixado

  saveAs(pdfUrl, pdfFileName);
}


export function Home () {
  return (
    <HomeMain>
      <div id="container">
        <div className="infos">
          <h1>Olá, eu sou o</h1>
          <h2>Matheus Valentim :)</h2>
          <p>Desenvolvedor Front-end</p>
          <div className="buttons">
            <button id="home_button" >
              <a>Baixar CV</a>
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