import { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  margin-bottom: 30px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-color);
`;

const Title = styled.div`
  font-weight: 300;
  padding: 5px 20px 5px 15px;
  background-image: url(${(props: TitleProps) => props.icon});
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 100%;
`;

const EllipsisCTA = styled(FontAwesomeIcon)`
  color: var(--grey2-color);
  padding-right: 15px;
`;

const ListContainer = styled.div`
  padding: 20px 20px 0;
`;

const SectionTypes = {
  mood: {
    title: 'Mood',
    icon: '/assets/images/emojis/Mood.png',
  },
  project: {
    title: 'Projects',
    icon: '/assets/images/emojis/Projects.png',
  },
  course: {
    title: 'Courses',
    icon: '/assets/images/emojis/Courses.png',
  },
  calendar: {
    title: 'Calendar',
    icon: '/assets/images/emojis/Calendar.png',
  },
};

type SectionProps = {
  children?: React.ReactNode;
  type: 'mood' | 'project' | 'course' | 'calendar';
};

type TitleProps = {
  icon: string;
};

export const Section: FC<SectionProps> = ({ children, type = 'mood' }) => {
  return (
    <Container>
      <HeaderContainer>
        <Title icon={SectionTypes[type].icon}>{SectionTypes[type].title}</Title>
        <EllipsisCTA icon={faEllipsisH} />
      </HeaderContainer>
      <ListContainer>{children}</ListContainer>
    </Container>
  );
};
