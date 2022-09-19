import styled from "styled-components";

const gradient = '300deg, rgb(68, 188, 228), rgb(92, 4, 133)'

export const Section = styled.div`
  display: flex;
  justify-content: left;
  width: 50vw;
  margin: auto;
  background-image: url("./imgs/components/home/bg-hero.png");
  padding: 3rem;
  border-radius: 5px;
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