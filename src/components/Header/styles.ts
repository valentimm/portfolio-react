import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;
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
        color: ${props => props.theme['primary-200']};
        border-bottom: 5px solid ${props => props.theme['primary-200']};
        transition: 0.1s ease-in-out;
      }
    }
  }
`;

export const Logo = styled.h1`
  margin-left: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme['primary-000']};
`;
