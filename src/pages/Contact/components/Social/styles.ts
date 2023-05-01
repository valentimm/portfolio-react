import styled from "styled-components";

export const ContactBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {    display: flex;
    width: 6rem;
    height: 6rem;
    justify-content: center;
  }

  #socialContainer {
    border: 6px solid ${props => props.theme['primary-000']};
    width: 10rem;
    height: 10rem;
    border-radius: 9999px;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`