import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -28rem;
  transform: scale(0.9);
`;

export const Sub = styled.div`
  transition: 0.3s ease;
  transform: scale(0.85);
  position: relative;
  left: 40rem;
  filter: brightness(33%);
  &:hover {
    filter: brightness(43%);
    transform: scale(0.875);
  }
`;

export const Next = styled.div`
  transition: 0.3s ease;
  z-index: 1;
  transform: scale(0.9);
  position: relative;
  left: 20rem;
  filter: brightness(66%);
  &:hover {
    cursor: pointer;
    filter: brightness(76%);
    transform: scale(0.95);
  }
`;

export const Active = styled.div`
  z-index: 2;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Prev = styled.div`
  transition: 0.3s ease;
  z-index: 1;
  transform: scale(0.9);
  position: relative;
  left: -20rem;
  filter: brightness(66%);
  &:hover {
    cursor: pointer;
    filter: brightness(76%);
    transform: scale(0.95);
  }
`;