import styled from "styled-components";

export const StackItem = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-bottom: 8px solid ${props => props.theme['bg-200']};
  border-radius: 6px 36px;
  margin: 1.5rem;
  background-color: ${props => props.theme['bg-300']};
  text-align: center; 
  color: ${props => props.theme['text-200']};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 8px solid ${props => props.theme['primary-000']};
    transform: scale(1.05);
  }
  img {
    width: 3rem;
    height: 3rem;
    margin-top: 0.75rem;
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    border-bottom: 6px solid ${props => props.theme['bg-200']};
    border-radius: 6px 36px;
    margin: 1rem;
    background-color: ${props => props.theme['bg-300']};
    text-align: center;
    color: ${props => props.theme['text-200']};
    transition: all 0.2s ease-in-out;
    font-size: 0.75rem;
    
    &:hover {
      border-bottom: 6px solid ${props => props.theme['primary-000']};
      transform: scale(1.05);
    }
    img {
      width: 2rem;
      height: 2rem;
      margin-top: 0.5rem;
    }
  }
`;