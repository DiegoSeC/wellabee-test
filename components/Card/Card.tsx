import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border: 1px solid var(--grey-color);
  border-radius: 35px;
  padding: 25px;
  box-shadow: none;

  @media (min-width: 1024px) {
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.15);
  }
`;

type CardProps = {
  children: React.ReactNode | React.ElementType;
  className?: string;
};

export const Card: FC<CardProps> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};
