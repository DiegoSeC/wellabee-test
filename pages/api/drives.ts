import type { NextApiRequest, NextApiResponse } from 'next';
import { Drives } from '../../interfaces/drives';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Drives[]>
) {
  res.status(200).json([
    {
      percentage: 65,
      title: 'AUTONOMY',
      value: '6.5',
      color: `rgba(24, 192, 255, ${65 / 100})`,
    },
    {
      percentage: 71,
      title: 'MASTERY',
      value: '7.1',
      color: `rgba(253, 180, 0, ${71 / 100})`,
    },
    {
      percentage: 90,
      title: 'PURPOSE',
      value: '9.0',
      color: `rgba(247, 43, 96, ${90 / 100})`,
    },
  ]);
}
