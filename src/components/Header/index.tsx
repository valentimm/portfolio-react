import { HeaderMain, Logo, Navigation, NavigationItem, NavigationLink} from "./styles"

export function Header() {
  return (
    <HeaderMain>
      <Logo>MV</Logo>
      <Navigation>
        <NavigationItem>
          <NavigationLink href="#">Home</NavigationLink>
          <NavigationLink href="#">About</NavigationLink>
          <NavigationLink href="#">Stacks</NavigationLink>
          <NavigationLink href="#">Contact</NavigationLink>
        </NavigationItem>
      </Navigation>
    </HeaderMain>
  )
}