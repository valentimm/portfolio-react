import { HeaderMain, Logo, Navigation, NavigationItem, NavigationLink} from "./styles"

export function Header() {
  return (
    <HeaderMain>
      <Logo>MV</Logo>
      <Navigation>
        <NavigationItem>
          <NavigationLink href="#">Home</NavigationLink>
          <NavigationLink href="#">Home</NavigationLink>
          <NavigationLink href="#">Home</NavigationLink>
          <NavigationLink href="#">Home</NavigationLink>
        </NavigationItem>
      </Navigation>
    </HeaderMain>
  )
}