import styled from "styled-components";

export const Hero = styled.div`
  height: 40rem;
  width: 37rem;
  background-image: url("/imgs/components/home/bg-projects1.png");
  z-index: 4;
  position: relative;
  top: 20px;
`;

export const Title = styled.h1`
 font-size: 70px;
 margin: 0px;
 position: relative;
 top: 60px;
 left: 130px;
`;

export const Body = styled.p`
  font-size: 27px;
  line-height: 1.75;
  width: 75%;
  position: relative;
  top: 50px;
  left: 65px;
`;

export const BodyLink = styled.a`
  font-size: 26px;
  color: rgb(169, 23, 236);
  text-decoration: underline;
  line-height: 1.75;
  width: 75%;
  position: relative;
  bottom: 23px;
  left: 153px;
  transition: 0.3s ease;

  &:hover {
    color: rgb(68, 188, 228);
  }
  &:active {
    font-size: 25px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  bottom: 560px;
  margin-bottom: -560px;
`;

export const MiniBar = styled.div`
  height: 81px;
  width: 1250px;
  background-image: url("/imgs/components/home/bg-projects2.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const BarText = styled.h3`
  margin-right: 15px;
  font-size: 25px;
`;