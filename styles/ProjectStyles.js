import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Backdrop = styled.div`
  display: flex;
  width: 85vw;
  height: auto;
  margin-top: 140px;
  margin-bottom: 20px;
  background-image: linear-gradient(120deg, rgb(10, 27, 32), rgb(22, 6, 29));
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

export const SidebarBg = styled.div`
  background-color: rgba(5, 5, 5, 0.65);
  box-shadow: 5px 0 15px rgba(5, 5, 5, 0.75);
  width: 40px;
`;

export const Sidebar = styled.div`
  display: flex;
  width: auto;
  height: 82%;
  background-color: rgba(5, 5, 5, 0.75);
  align-items: center;
  z-index: 10;
  position: fixed;
  overflow: hidden;
`;

export const SbIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  color: rgb(100, 100, 100);
  font-size: 27px;
  &:hover {
    cursor: pointer;
    color: rgb(150, 150, 150);
    transform: scale(1.05);
  }
`;

export const Shadow = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0px;
  box-shadow: 0 -10px 100px 50px black;
`;