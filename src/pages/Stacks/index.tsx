import { StacksList } from './styles';
import { Item, ItemProps } from './components/Item';
import react from './assets/react.svg';
import native from './assets/iphone.svg';
import figma from './assets/figma.svg';
import python from './assets/python.svg';
import typescript from './assets/typescript.svg';
import html from './assets/html5.svg';
import css from './assets/css3.svg';
import javascript from './assets/javascript.svg';
import nodejs from './assets/nodejs.svg';
import next from './assets/nextjs.svg';
import styledcomponents from './assets/styledComponents.svg';
import sass from './assets/sass.svg';
import git from './assets/git.svg';
import mui from './assets/materialUi.svg';
import storybook from './assets/storybook.svg';
import tailwind from './assets/tailwind.svg';

export function Stacks() {
  const items: ItemProps[] = [
    { key: 1, name: 'React', icon: react },
    { key: 2, name: 'React Native', icon: native},
    { key: 3, name: 'Python', icon: python},
    { key: 4, name: 'HTML 5', icon: html},
    { key: 5, name: 'CSS', icon: css},
    { key: 6, name: 'JavaScript', icon: javascript},
    { key: 7, name: 'TypeScript', icon: typescript},
    { key: 8, name: 'Styled Components', icon: styledcomponents},
    { key: 9, name: 'Tailwind CSS', icon: tailwind},
    { key: 10, name: 'Storybook', icon: storybook},
    { key: 11, name: 'Material UI', icon: mui},
    { key: 12, name: 'SASS', icon: sass},
    { key: 13, name: 'Git', icon: git},
    { key: 14, name: 'Node JS', icon: nodejs},
    { key: 15, name: 'Next JS', icon: next},
    { key: 16, name: 'Figma', icon: figma},
  ];

  return (
    <StacksList>
      <h1>Stacks</h1>
      <div id="itens">
        {items.map(item => {
          return (
          <Item 
            key={item.key}
            name={item.name} 
            icon={item.icon}
            />
          );
        })}

      </div>
    </StacksList>
  );
}
