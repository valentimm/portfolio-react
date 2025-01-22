import { ProjectThumbnail, ProjectThumbnailProps } from "./components/ProjectThumbnail";
import { ProjectsMain } from "./styles";

export function Projects () {
  const projects: ProjectThumbnailProps[] = [
    { key: 1, name: 'Todo List', image: 'todo-thumb.svg', description: 'Um todo list desenvolvido no programa Ignite para treinar os conceitos iniciais de React. Foram aplicados fundamentos do React, componentes, propriedades, estados, imutabilidades, hooks e Typescript.', deploy: 'https://todo.mvalentim.dev', code: 'https://github.com/valentimm/todo'},
    { key: 6, name: 'Password generator', image: 'passify-thumb.svg', description: 'Gerador de senha feito com uma interface em React e um script feito com python, gerando uma senha aleatória com o número de caracteres desejado pelo usuário. ', deploy: 'https://passify.mvalentim.dev', code: 'https://github.com/valentimm/PasswordGenerator'},
    { key: 2, name: 'Pomodoro timer', image: 'pomodoro-thumb.svg', description: 'Um  timer desenvolvido para controle de hábito, aplicação completa SPA, ContextoAPI, useReducer e immer.  ', deploy: 'https://pomodoro.mvalentim.dev', code: ''},
    { key: 8, name: 'Weather App', image: 'weather-thumb.svg', description: 'Um aplicativo de previsão do tempo que utiliza a API OpenWeather para exibir informações sobre as condições climáticas. Com uma interface intuitiva, permite aos usuários verificar temperatura, clima atual.', deploy: 'https://weatherapp.mvalentim.dev', code: ''},
    { key: 7, name: 'Scrapper cápsula de café', image: 'dolce-thumb.svg', description: 'Utilizando a biblioteca Scrapy criei uma spider para fazer a coleta de dados como Nome e preço das cápsulas de café do site.', code: 'https://github.com/valentimm/dolcecollector'},
    { key: 4, name: 'Coffee Shop', image: 'coffee-thumb.svg', description: 'Aplicação React para gerenciar o carrinho de compras, com funcionalidades como listagem de produtos, ajuste de quantidades, preenchimento de endereço e cálculo de totais. O projeto usa conceitos como estados, ContextAPI, LocalStorage e reduce.', deploy: 'https://coffee.mvalentim.dev/', code: 'https://github.com/valentimm/coffee-page'},
    { key: 5, name: 'Link Tree', image: 'devlinks-thumb.svg', description: 'Um link tree feito com HTML, CSS e JavaScript apenas. Com links, estilos e seletor de modo claro/modo escuro.', deploy: 'https://github.mvalentim.dev/', code: 'https://github.com/valentimm/devlinks'},
    { key: 3, name: 'NFCe Reader', image: 'nfc-thumb.svg', description: 'Aplicação para leitura de QR Codes de NFCe, facilitando o controle financeiro ao extrair, utilizando Scrapy, e organizar informações detalhadas de notas fiscais eletrônicas de forma prática e eficiente.', code: 'https://github.com/valentimm/NFCe'},
    { key: 9, name: 'Comment Feed', image: 'feed-thumb.svg', description: 'Um simples todo list', deploy: 'https://todo.mvalentim.dev', code: ''},

  ];
  return (
    <ProjectsMain>
        <h1>Projects</h1>
        <div id="container">
          {projects.map(project => {
            return (
              <ProjectThumbnail
                key={project.key}
                name={project.name}
                image={project.image}
                description={project.description}
                deploy={project.deploy}
                code={project.code}
              />
            )
          })}
        </div>
    </ProjectsMain>
  )
}