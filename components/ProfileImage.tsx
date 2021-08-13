import { FC } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div<ProfileImageProps>`
  display: block;
  width: 100%;
  border-radius: 15px;
  background-image: url(${(props) => props.profile});
  background-position: center;
  background-size: cover;
  height: 100%;

  @media (min-width: 1024px) {
    border-radius: 35px;
    width: 350px;
    height: 400px;
  }
`;

type ProfileImageProps = {
  profile: string;
  className?: string;
};

export const ProfileImage: FC<ProfileImageProps> = ({ profile, className }) => {
  return <ImageContainer profile={profile} className={className} />;
};
