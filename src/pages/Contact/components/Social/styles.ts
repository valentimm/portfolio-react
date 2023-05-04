import styled from "styled-components";

export const ContactBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease-in-out 0.2s;
  border-radius: 9999px;
  cursor: pointer;
  
  img {
    display: flex;
    width: 4rem;
    height: 4rem;
    justify-content: center;
  }

  #socialContainer {
    border: 6px solid ${props => props.theme['primary-000']};
    width: 8rem;
    height: 8rem;
    border-radius: 9999px;
 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out 0.2s;

    &:hover {
      background-color: ${props => props.theme['bg-300']};
      border: 6px transparent;
    }
  }
  #name {
    display: none;
  }

  &:hover{
    transform: scale(0.8);
  }
`