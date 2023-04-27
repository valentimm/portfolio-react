import styled from "styled-components";


export const StacksList = styled.main`
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

  #itens {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    flex-wrap: wrap;
    justify-content: center;
  }

`;