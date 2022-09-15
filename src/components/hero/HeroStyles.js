import styled from "styled-components";

const accentColor = 'lightBlue';

export const Section = styled.div`
  display: flex;
  justify-content: left;
  width: 50vw;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.25);
  color: ${accentColor};
  padding: 3rem;
  border-radius: 5px;
  text-shadow: 4px 5px rgba(0, 0, 0, 0.3); 
`;

export const SectionTitle = styled.h1`
  font-size: 60px;
  margin: 0px;
`;

export const SectionBody = styled.p`
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
  background-color: ${accentColor};
  transition: 0.3s ease; 
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0);
    color: ${accentColor};
    border: 5px solid ${accentColor};
    box-shadow: 4px 5px rgba(0, 0, 0, 0.3);
    text-shadow: 4px 5px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transition: 0s;
    opacity: 0.5;
  }
`;