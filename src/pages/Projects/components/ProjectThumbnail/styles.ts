import styled from "styled-components";

export const StyleProjectThumbnailMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  width: 26rem;
  height: 18rem;
  overflow: hidden;
  border-radius: 36px;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 36px;
    margin-top: -2rem;
  }
  .buttons-container {
    display: flex;
    width: 26rem;
    gap: 1rem;
    position: absolute;
    bottom: 2rem;
    left: 0;
    justify-content: center;
    align-items: center;
    padding-top: 0.5rem;
    background-color: ${props => props.theme["bg-100"]};
  }

  button {
    bottom: 0;
    width: 10rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme["primary-000"]};
    background-color: transparent;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: ${props => props.theme["text-100"]};
    &:hover {
      transform: scale(0.9);
      background-color: ${props => props.theme["primary-000"]};
      color: ${props => props.theme["bg-300"]};
    }
    a {
      text-decoration: none;
    }
  }
  .infos {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    background-color: rgba(30, 30, 30, 0.9);
    border-radius: 12px;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    h3 {
      color: ${props => props.theme["text-100"]};
      margin: 0;
      border-bottom: 1px solid ${props => props.theme["primary-000"]};
    }
    p {
      color: ${props => props.theme["text-100"]};
      margin: 0;
    }
  }
  &:hover .infos {
    opacity: 1;
    visibility: visible;
  }
`;
