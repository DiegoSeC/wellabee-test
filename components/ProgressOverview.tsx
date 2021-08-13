import styled from 'styled-components';
import useSWR from 'swr';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { Card } from './Card';
import { FC } from 'react';
import { Drives } from '../interfaces/drives';

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;

  div {
    max-width: 80px;
    text-align: center;

    span {
      margin-top: 10px;
      display: block;
      font-weight: 300;
      font-size: 12px;
      color: var(--black-color);
    }
  }
`;

type ProgressOverviewProps = {
  className?: string;
};

export const ProgressOverview: FC<ProgressOverviewProps> = ({ className }) => {
  const { data } = useSWR<Drives[]>('/api/drives');

  return (
    <Card className={className}>
      <Card.Header>
        <div>Drives</div>
      </Card.Header>
      <ProgressBarContainer>
        {data?.map((item, index) => (
          <div key={index}>
            <CircularProgressbar
              value={item.percentage}
              text={`${item.value}`}
              counterClockwise
              strokeWidth={12}
              styles={buildStyles({
                pathColor: item.color,
                textColor: '#292242',
              })}
            />
            <span>{item.title}</span>
          </div>
        ))}
      </ProgressBarContainer>
    </Card>
  );
};
