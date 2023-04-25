import { HeaderMain, Logo} from "./styles"
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <HeaderMain>
      <Logo>MV</Logo>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/stacks">Stacks</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </nav>
    </HeaderMain>
  )
}