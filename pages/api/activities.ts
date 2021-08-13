import type { NextApiRequest, NextApiResponse } from 'next';
import { Activity } from '../../interfaces/activity';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Activity[]>
) {
  res.status(200).json([
    {
      type: 'mood',
      title: 'Mood',
      items: [
        {
          type: 'text',
          text: 'Bussy week but super proud of the results achieved! Feeling great :) (4/5)',
        },
      ],
    },
    {
      type: 'project',
      title: 'Projects',
      items: [
        {
          type: 'text',
          text: 'Teams in Space',
        },
        {
          type: 'text',
          text: 'Around the Jupiter',
        },
      ],
    },
    {
      type: 'course',
      title: 'Courses',
      items: [
        {
          type: 'text',
          text: 'CSS - Basics to Advanced for Front-end Development',
        },
        {
          type: 'text',
          text: 'Tactics for Smarter Team Comunication',
        },
      ],
    },
    {
      type: 'calendar',
      title: 'Calendar',
      items: [
        {
          type: 'time',
          text: 'Daily Standup',
          time: {
            hour: '09:00',
            minutes: '45 mins',
          },
        },
        {
          type: 'time',
          text: 'Project Brainstorm',
          time: {
            hour: '11:30',
            minutes: '120 mins',
          },
        },
      ],
    },
  ]);
}
