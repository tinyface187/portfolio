import styled from "styled-components";

const TXT_COLOR = "rgb(100, 100, 100)";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(5, 5, 5, 0.75);
  box-shadow: 8px 8px 16px rgb(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease;
  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 225px;
  filter: brightness(0.8);
`;

export const Body = styled.div`
  width: 95%;
  margin-top: 10px;
  border-top: 1px solid ${TXT_COLOR};
  color: ${TXT_COLOR};
`;

export const Title = styled.h3`
  font-size: 24px;
  margin: 0;
`;

export const Text = styled.p`
  margin-top: 5px;
`;