import { Request, Response } from 'express';

export function helloMessage(req: Request, res: Response): Response {
  const { name } = req.params;
  const message = `Hello ${name}`;
  return res.status(200).json({ message });
}
