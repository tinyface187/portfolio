import styled from "styled-components";

const BG_SIZE = {
  "Width": "700px",
  "Height": "400px "
}

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  background-size: ${BG_SIZE.Width} ${BG_SIZE.Height};
  width: ${BG_SIZE.Width};
  height: ${BG_SIZE.Height};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3); 
  filter: brightness(0.9);
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.80);
`;

export const Title = styled.h1`
  margin: 0px;
  padding-top: 10px;
  font-weight: bolder;
  font-size: 200%;
`;

export const Description = styled.h3`
  margin: 0px;
  padding-bottom: 30px;
  font-size: 125%;
  line-height: 1.75;
`;