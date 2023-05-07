import styled from "styled-components";

export const ContactMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 8rem;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme['text-100']};
    width: 90%;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme['primary-000']};
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme['accent-100']};
  }

  #socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 4rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    #socials {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4rem;
      gap: 2rem;
    }
  }
  
`;