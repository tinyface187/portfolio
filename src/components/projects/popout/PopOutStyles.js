import styled from "styled-components";

const TXT_COLOR = "rgb(100, 100, 100)";

export const Container = styled.div`
  width: 740px;
  height: 95%;
  margin-left: 20px;
  padding: 50px;
  background: linear-gradient(120deg, rgb(10, 10, 10), rgba(20, 20, 27, 0.9));
  box-shadow: 0 0  5px rgb(0, 0, 0);
  overflow-y: scroll;
  overflow-x: hidden;

  display: none;
`;

export const Preview = styled.img`
  width: 640px;
  height: 360px;
`;

export const Divider = styled.div`
  width: 640px;
  height: 2px;
  border-radius: 1px;
  background-color: ${TXT_COLOR};
  margin-top: 15px;
`;

export const Title = styled.h1`
  color: ${TXT_COLOR};
  margin-top: 0px;
`;

export const SubTitle = styled.h3`
  color: ${TXT_COLOR};
  font-size: 23px;
  text-decoration: underline;
`;

export const Text = styled.p`
  color: ${TXT_COLOR};
  font-size: 18px;
  line-height: 1.75;
`;

export const Nav = styled.div`
  transform: scale(0.8);
  position: relative;
  right: 35px;
  top: 20px;
  display: flex;
  justify-content: space-between;
  width: 55%;
`;