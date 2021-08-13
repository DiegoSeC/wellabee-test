import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const HourLabel = styled.div`
  font-weight: 400;
  margin-right: 5px;
`;

const MinuteLabel = styled.div`
  color: var(--grey2-color);
  font-size: 14px;
`;

type TimeLabelProps = {
  hour?: string;
  minutes?: string;
};

export const TimeLabel: FC<TimeLabelProps> = ({ hour, minutes }) => {
  return (
    <Container>
      <HourLabel>{hour}</HourLabel>
      <MinuteLabel>{`${minutes} mins`}</MinuteLabel>
    </Container>
  );
};
