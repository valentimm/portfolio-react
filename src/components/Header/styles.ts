import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['purple']};
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 9999px;
  margin: 3rem;
  padding: 0 2rem;

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: red;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  
`