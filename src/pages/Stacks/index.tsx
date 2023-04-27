import { StacksList } from './styles';
import { Item, ItemProps } from './components/Item';
import stack01 from './assets/react-white.svg';
import stack02 from './assets/iphone-white.svg';
import stack03 from './assets/figma-white.svg';
import stack04 from './assets/python-white.svg';
import stack05 from './assets/typeScript-white.svg';
import stack06 from './assets/html5-white.svg';
import stack07 from './assets/css3-white.svg';
import stack08 from './assets/javascript-white.svg';
import stack09 from './assets/nodejs-white.svg';
import stack10 from './assets/nextjs-white.svg';
import stack11 from './assets/styledComponents-white.svg';
import stack12 from './assets/sass-white.svg';
import stack13 from './assets/git-white.svg';
import stack14 from './assets/materialUi-white.svg';
import stack15 from './assets/storybook-white.svg';
import stack16 from './assets/tailwind-white.svg';

export function Stacks() {
  const items: ItemProps[] = [
    { key: 1, name: 'React', icon: stack01 },
    { key: 2, name: 'React Native', icon: stack02},
    { key: 4, name: 'Python', icon: stack04},
    { key: 6, name: 'HTML 5', icon: stack06},
    { key: 7, name: 'CSS', icon: stack07},
    { key: 8, name: 'JavaScript', icon: stack08},
    { key: 5, name: 'TypeScript', icon: stack05},
    { key: 11, name: 'Styled Components', icon: stack11},
    { key: 16, name: 'Tailwind CSS', icon: stack16},
    { key: 15, name: 'Storybook', icon: stack15},
    { key: 14, name: 'Material UI', icon: stack14},
    { key: 12, name: 'SASS', icon: stack12},
    { key: 13, name: 'Git', icon: stack13},
    { key: 9, name: 'Node JS', icon: stack09},
    { key: 10, name: 'Next JS', icon: stack10},
    { key: 3, name: 'Figma', icon: stack03},
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
