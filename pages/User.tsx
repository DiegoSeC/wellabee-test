import type { NextPage } from 'next';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect } from 'react';

import { Navigation } from '../components/Navigation';
import { ProfileImage } from '../components/ProfileImage';
import { ProfileInfo } from '../components/ProfileInfo';
import { Section } from '../components/Section';
import { TimeLabel } from '../components/TimeLabel';
import { ProgressOverview } from '../components/ProgressOverview';
import { useWellabeeContext } from './context';
import { User } from '../interfaces/user';
import useSWR from 'swr';
import { Activity } from '../interfaces/activity';
import { Sidebar } from '../components/Sidebar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainStyled = styled.main`
  padding: 15px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const RightContainer = styled.div`
  margin-left: 0;

  @media (min-width: 1024px) {
    margin-left: 70px;
  }
`;

const LeftContainer = styled.div`
  margin-right: 0;
  display: none;

  @media (min-width: 1024px) {
    display: block;
    margin-right: 70px;
    width: 150px;
    flex-shrink: 0;
    height: 100vh;
    margin-top: -15px;
    border-right: 1px solid var(--grey-color);
  }
`;

const ProfileImageStyled = styled(ProfileImage)`
  margin-bottom: 40px;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

type HomeProps = {
  user: User;
};

const UserPage: NextPage<HomeProps> = ({ user }) => {
  const context = useWellabeeContext();
  const { data } = useSWR<Activity[]>('/api/activities');

  useEffect(() => {
    context.updateUser(user);
  }, [user]);

  return (
    <>
      <Navigation />
      <MainStyled>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <div>
          <ProfileInfo />
          {data?.map((item, index) => (
            <Section type={item.type} key={index}>
              {item.items.map((activity, activityIndex) =>
                activity.type === 'text' ? (
                  <Section.Item key={activityIndex}>
                    {activity.text}
                  </Section.Item>
                ) : (
                  <Section.Item key={activityIndex}>
                    <TimeLabel
                      hour={activity.time?.hour}
                      minutes={activity.time?.minutes}
                    />
                    {activity.text}
                  </Section.Item>
                )
              )}
            </Section>
          ))}
        </div>
        <RightContainer>
          <ProfileImageStyled profile={user.profilePicture} />
          <ProgressOverview />
        </RightContainer>
      </MainStyled>
    </>
  );
};

export default UserPage;
