import { FC } from 'react';
import styled from 'styled-components';

const SectionItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

const ListIcon = styled.i`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: rgb(239, 238, 247);
  margin-right: 8px;
  position: relative;

  &::before {
    content: '';
    background-color: rgb(102, 97, 120);
    display: block;
    position: absolute;
    width: 5px;
    height: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
`;

type SectionItemProps = {
  children?: React.ElementType | React.ReactNode;
};

export const SectionItem: FC<SectionItemProps> = ({ children }) => {
  return (
    <SectionItemContainer>
      <ListIcon />
      <div>{children}</div>
    </SectionItemContainer>
  );
};
