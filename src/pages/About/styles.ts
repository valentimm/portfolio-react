import styled from "styled-components";

export const AboutMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  margin: 4rem;
  
  p {
    color: ${props => props.theme['text-200']};
    font-weight: 200;
  }
  #container {
    display: flex;
    flex-direction: row;
    margin-top:3rem;
    gap: 2rem;
    border: 1px solid #ccc;
  }
  #right , #left {
    width: 50%; 
  }
`;