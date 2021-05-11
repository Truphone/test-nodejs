import { Request, Response, Express } from 'express';
import { BASE_URL } from '../config';

const route = async (_req: Request, res: Response) => {
  res.json({
    status: 'UP',
  });
};

export default function(app: Express) {
  app.get(`${BASE_URL}/health`, route);
}
