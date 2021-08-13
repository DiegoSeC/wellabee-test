import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../interfaces/user';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({
    id: 1,
    name: 'Monica Veen',
    position: 'Front-end Developer',
    location: 'Utrecht',
    timezone: '11:51 AM Local Time',
    startDate: 'Started on 12 February 2019',
    profilePicture: '/assets/images/HappyMonicaPicture.png',
  });
}
