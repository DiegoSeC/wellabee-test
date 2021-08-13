import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import styled from 'styled-components';

const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 300;
  align-items: center;
  justify-content: space-between;
`;

const EllipsisCTA = styled(FontAwesomeIcon)`
  color: var(--grey2-color);
  padding-right: 15px;
`;

type CardHeaderProps = {
  children: React.ElementType | React.ReactNode;
};

export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return (
    <CardTitleContainer>
      {children}
      <EllipsisCTA icon={faEllipsisH} />
    </CardTitleContainer>
  );
};
