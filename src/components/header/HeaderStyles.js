import styled from 'styled-components';

const accentColor = 'lightblue';
const gradient = '300deg, rgb(68, 188, 228), rgb(92, 4, 133)';

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.40);
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  transition: 0.3s ease;
  height: 50px;
  border: 2px solid rgb(130, 188, 250);
  border-radius: 50%;
`;

export const Title = styled.h1`
  font-size: 18px;
  margin: 0px;
  margin-left: 1rem;
`;

export const Icon = styled.a`
  transition: 0.3s ease;
  color: rgb(130, 188, 250);
  margin-right: 0.5rem;
  &:hover {
    transform: scale(1.2);
    color: rgb(92, 4, 133);
    cursor: pointer;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const NavLink = styled.a`
  font-size: 18px;
  font-weight: bolder;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 1rem;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    -webkit-text-fill-color: rgb(92, 4, 133);
  }
  &:active {
    opacity: 0.5;
    transition: 0s;
  }
`;