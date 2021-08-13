import styled from 'styled-components';
import { useWellabeeContext } from '../pages/context';
import { ProfileImage } from './ProfileImage';

const getIcon = (props: InfoProps) => {
  if (props.map) {
    return '/assets/images/LocationIcon@2x.png';
  }

  if (props.starting) {
    return '/assets/images/StartingDateIcon@2x.png';
  }

  if (props.time) {
    return '/assets/images/TimezoneIcon@2x.png';
  }

  if (props.connection) {
    return '/assets/images/ConnectionsIcon@2x.png';
  }

  return null;
};

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImageContainer = styled.div`
  width: 100px;
  margin-left: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;

const Position = styled.div`
  font-size: 12px;
  font-weight: 200;
`;

const Info = styled.div`
  font-weight: 100;
  font-size: 12px;
  margin-bottom: 5px;
  background-image: url(${getIcon});
  background-position: 0;
  background-repeat: no-repeat;
  background-size: 8px auto;
  padding-left: 15px;
`;

const ConnectionLink = styled.a`
  color: var(--sky-color);
  text-decoration: none;
`;

type InfoProps = {
  map?: boolean;
  time?: boolean;
  starting?: boolean;
  connection?: boolean;
};

export const ProfileInfo = () => {
  const { user } = useWellabeeContext();

  return (
    <Container>
      <ProfileInfoContainer>
        <InfoContainer>
          <Title>{user.name}</Title>
          <Position>{user.position}</Position>
        </InfoContainer>
        <InfoContainer>
          <Info map>{user.location}</Info>
          <Info time>{user.timezone}</Info>
          <Info starting>{user.startDate}</Info>
          <Info connection>
            <ConnectionLink href=''>View Connections</ConnectionLink>
          </Info>
        </InfoContainer>
      </ProfileInfoContainer>
      <ProfileImageContainer>
        <ProfileImage profile={user.profilePicture} />
      </ProfileImageContainer>
    </Container>
  );
};
