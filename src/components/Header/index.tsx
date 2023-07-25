import { NavLink } from "react-router-dom"
import { HeaderMain, Logo } from "./styles"

export function Header() {
  return (
    <HeaderMain>
      <Logo>MV</Logo>
      <nav id="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/stacks">Stacks</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </nav>
    </HeaderMain>
  )
}