import styled from "styled-components";

const gradient = '300deg, rgb(68, 188, 228), rgb(92, 4, 133)'

export const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 25px;
  background: -webkit-linear-gradient(${gradient});
  transition: 0.3s ease; 
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: transparent;
    border: 4px solid rgb(92, 4, 133);
    box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgb(92, 4, 133);
  }
  &:active {
    transition: 0s;
    opacity: 0.5;
  }
`;