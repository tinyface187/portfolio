import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 40px;
  margin-left: auto;
`;

export const Title = styled.h1`
  margin: 0;
  color: rgb(100, 100, 100);
  font-size: 45px;
`;

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-column-gap: 75px;
  grid-row-gap: 65px;
  grid-template-columns: 1fr 1fr 1fr;

`;