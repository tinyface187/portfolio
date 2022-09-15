import styled from 'styled-components';
import Link from 'next/link';

const accentColor = 'white';

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  border-bottom: 3px solid ${accentColor};
  color: white;
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  transition: 0.3s ease;
  height: 50px;
  border: 2px solid ${accentColor};
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
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