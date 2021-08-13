import { FC } from 'react';
import styled from 'styled-components';
import { useWellabeeContext } from '../pages/context';

const Container = styled.div`
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--black-color);
  font-weight: 100;
`;

const RootSection = styled.div`
  background-image: url('/assets/images/MyTeamIcon@2x.png');
  background-size: 20px;
  background-position: 0;
  background-repeat: no-repeat;
  padding-left: 25px;
`;

const Chevron = styled.div`
  padding: 0 10px;
`;

const NameContainer = styled.div`
  font-weight: 300;
`;

type BreadcrumbProps = {
  className?: string;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ className }) => {
  const { user } = useWellabeeContext();
  return (
    <Container className={className}>
      <RootSection>My team</RootSection>
      <Chevron>&gt;</Chevron>
      <NameContainer>{user.name}</NameContainer>
    </Container>
  );
};
