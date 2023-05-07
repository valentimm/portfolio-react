import styled from "styled-components";

export const HeaderMain = styled.header`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.theme['bg-200']};
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 9999px;

  nav {
    display: flex;
    list-style: none;
    margin: 0;
    text-decoration: none;

    a {
      text-decoration: none;
      --webkit-text-decoration-skip: none;
      color: ${props => props.theme['text-100']};
      margin-right: 1rem;
      padding: 0.5rem;
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      &:hover {
        color: ${props => props.theme['primary-000']};
        border-bottom: 5px solid ${props => props.theme['primary-000']};
        transition: 0.1s ease-in-out;
      }
    }
    a.active {
      color: ${props => props.theme['primary-000']};
      border-bottom: 5px solid ${props => props.theme['primary-000']};
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-inline: 1rem;
    font-size: 0.75rem;
    padding: 0.5rem;
    nav{
      margin-left: 1rem;
    }
  }
`;

export const Logo = styled.h1`
  margin-left: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme['primary-000']};

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 1rem;
    margin-left: 1.5rem;
  }
`;
