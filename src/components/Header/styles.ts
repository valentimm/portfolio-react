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
  border-radius: 9999px
`;

export const Logo = styled.h1`
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme['primary-100']};
`;

export const Navigation = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

export const NavigationItem = styled.li`
  margin-right: 1rem;
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme['text-100']};
  margin-right: 1rem;
  &:hover {
    color: ${props => props.theme['primary-200']};
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  
`