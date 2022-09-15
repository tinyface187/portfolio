import styled from 'styled-components';

const accentColor = 'lightblue';

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.50);
  border-bottom: 3px solid ${accentColor};
  color: white;
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  border: 2px solid ${accentColor};
  border-radius: 50%;
`;

export const Title = styled.h1`
  color: ${accentColor};
  font-size: 18px;
  margin: 0px;
  margin-left: 1rem;
`;

export const Icon = styled.a`
  transition: 0.3s ease;
  color: ${accentColor};
  margin-right: 0.5rem;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const NavLink = styled.a`
  color: ${accentColor};
  font-size: 18px;
  font-weight: bolder;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 1rem;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
  &:active {
    opacity: 0.5;
  }
`;