import styled from "styled-components";

const gradient = '300deg, rgb(68, 188, 228), rgb(92, 4, 133)'

export const Section = styled.div`
  display: flex;
  justify-content: left;
  width: 50vw;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.40);
  padding: 3rem;
  border-radius: 5px;
`;

export const SectionTitle = styled.h1`
  font-size: 60px;
  margin: 0px;
`;

export const SectionBody = styled.p`
  color: rgb(130, 188, 250);
  font-size: 20px;
  line-height: 1.75;
  margin-right: 10%;
`;

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
    box-shadow: 4px 5px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgb(92, 4, 133);
  }
  &:active {
    transition: 0s;
    opacity: 0.5;
  }
`;