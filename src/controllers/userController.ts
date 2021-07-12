import { Request, Response } from 'express';
import { users } from '../db';

export function signIn(req: Request, res: Response): Response {
  const { user, password } = req.body;

  const result = users.find((dbUser) => {
    return (
      (user === dbUser.username || user === dbUser.email) &&
      password === dbUser.password
    );
  });

  if (!result) {
    return res.status(404).json({
      message: 'User or password not valid',
    });
  }

  const { name, username, email, id } = result;
  return res.status(200).json({
    id,
    name,
    username,
    email,
  });
}
