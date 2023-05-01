import { StacksList } from './styles';
import { Item, ItemProps } from './components/Item';
import react from './assets/react-white.svg';
import native from './assets/iphone-white.svg';
import figma from './assets/figma-white.svg';
import python from './assets/python-white.svg';
import typescript from './assets/typeScript-white.svg';
import html from './assets/html5-white.svg';
import css from './assets/css3-white.svg';
import javascript from './assets/javascript-white.svg';
import nodejs from './assets/nodejs-white.svg';
import next from './assets/nextjs-white.svg';
import styledcomponents from './assets/styledComponents-white.svg';
import sass from './assets/sass-white.svg';
import git from './assets/git-white.svg';
import mui from './assets/materialUi-white.svg';
import storybook from './assets/storybook-white.svg';
import tailwind from './assets/tailwind-white.svg';

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
