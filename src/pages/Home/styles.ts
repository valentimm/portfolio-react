import styled from "styled-components";

export const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 8rem;
  font-size: 2rem;
  margin-top: 20vh;

  h1 {
    color: ${props => props.theme['text-100']}; 
  }
  h2 {
    color: ${props => props.theme['primary-000']}; 
  }
  p {
    color: ${props => props.theme['accent-100']};
    font-size: 1rem;
    opacity: 0.8;
  }
  #container {
    display: flex;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    gap: 1rem;
  }
  .buttons a {
    text-decoration: none;
    color: ${props => props.theme['text-100']};
  }
  #home_button {
    width: 12rem;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme['primary-000']};
    background-color: transparent;
    color: ${props => props.theme['bg-300']};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(0.9);
      background-color: ${props => props.theme['primary-000']};
      a{
        color: ${props => props.theme['bg-300']};
      }
    }      
  }
  img {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-top: -2rem;
    margin-right: 8rem;
    width: 400px;
    height: 400px;
    border-radius: 69% 31% 82% 18% / 29% 52% 48% 71%;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;