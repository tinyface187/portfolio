import styled from "styled-components";

const COLOR = "rgb(100, 100, 100)";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

export const Title = styled.h2`
  color: ${COLOR};
  font-size: 35px;
  text-align: center;
`;

export const Content = styled.p`
  color: ${COLOR};
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  line-height: 0;
  transition: 0.3s ease;
`;

export const Item = styled.p`
  &:hover {
    font-size: 21px;
    color: rgb(140, 140, 140);
    text-shadow: 2px 2px 3px black;
  }
`;

export const Line = styled.div`
  height: 2px;
  background-color: ${COLOR};
  margin: auto;
`;