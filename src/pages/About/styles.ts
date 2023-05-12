import styled from "styled-components";

export const AboutMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  margin: 4rem;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme['text-100']};
    width: 90%;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme['primary-000']};
  }
  
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

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`;