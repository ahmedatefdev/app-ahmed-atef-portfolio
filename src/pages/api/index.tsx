import { NextApiRequest, NextApiResponse } from 'next';

const ApiIndex = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json('Next api index');
};

export default ApiIndex;
