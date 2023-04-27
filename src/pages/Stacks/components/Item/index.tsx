import { StackItem } from './styles'

export interface ItemProps {
  key: number;
  name: string;
  icon: string;
}

export function Item ({ name, icon }: ItemProps) {
  return (
    <StackItem>
        <div id="name">{name}</div>
        <img src={icon} alt={name} />
    </StackItem>
  )
}
