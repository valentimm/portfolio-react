import { ProjectThumbnail, ProjectThumbnailProps } from "./components/ProjectThumbnail";
import { ProjectsMain } from "./styles";

export function Projects () {
  const projects: ProjectThumbnailProps[] = [
    { key: 1, name: 'Todo List', image: 'todo-thumb.svg', description: 'Um todo list desenvolvido no programa Ignite para treinar os conceitos iniciais de React. Foram aplicados fundamentos do React, componentes, propriedades, estados, imutabilidades, hooks e Typescript', deploy: 'https://todo.mvalentim.dev', code: 'https://github.com/valentimm/todo'},
    { key: 2, name: 'Pomodoro timer', image: 'pomodoro-thumb.svg', description: 'Um  timer desenvolvido para ', deploy: 'https://pomodoro.mvalentim.dev', code: ''},
    { key: 3, name: 'Virtual Badge', image: 'badge-thumb.svg', description: 'Uma aplicação onde as pessoas podem gerar seu crachá para participar do evento. É uma aplicação simples que visa ensinar os fundamentos da programação para quem está no início da jornada.', deploy: 'https://valentimm.github.io/PersonalBadge/', code: 'https://github.com/valentimm/PersonalBadge'},
    { key: 4, name: 'Coffee Shop', image: 'coffee-thumb.svg', description: '', deploy: 'https://coffee.mvalentim.dev/', code: 'https://github.com/valentimm/coffee-page'},
    { key: 5, name: 'Link Tree', image: 'devlinks-thumb.svg', description: 'Um simples todo list', deploy: 'https://github.mvalentim.dev/', code: 'https://github.com/valentimm/devlinks'},
    { key: 6, name: 'E-sports duo', image: 'esports-thumb.svg', description: 'Um simples pomodoro', deploy: 'https://pomodoro.mvalentim.dev', code: ''},
    { key: 7, name: 'Habit Tracker', image: 'habits-thumb.svg', description: 'Uma pokedex', deploy: 'https://pokedex.mvalentim.dev', code: ''},
    { key: 8, name: 'Weather App', image: 'weather-thumb.svg', description: 'Um app', deploy: 'https://weatherapp.mvalentim.dev', code: ''},
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