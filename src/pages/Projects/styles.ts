import styled from "styled-components";

export const ProjectsMain = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme['text-100']};
    width: 100%;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme['primary-000']};
  }
  #container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
`;