import { Request, Response } from 'express';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
): void => {
  res.status(500).json({ error: 'Internal server error.' });
};
