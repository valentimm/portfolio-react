import { HeaderContainer, Button } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <header>
        <h1>Matheus Valentim</h1>
        <h2>Front-end Developer</h2>
        <Button>
          <div className="menu">
            <span>About</span>
            <span>Projects</span>
            <span>Skills</span>
            <span>Contact</span>
          </div>
        </Button>
      </header>
    </HeaderContainer>
  )
}