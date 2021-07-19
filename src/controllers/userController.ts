import { Request, Response } from 'express';
import { users, User } from '../db';

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

export function insertUser(req: Request, res: Response): Response {
  const { name, username, email, password } = req.body;

  const lastId = users[users.length - 1].id;

  const newUser = {
    id: lastId + 1,
    name,
    username,
    email,
    password,
  } as User;

  users.push(newUser);

  const response = Object.assign({}, newUser) as any;
  delete response.password;

  return res.status(200).json(response);
}

export function listUsers(req: Request, res: Response): Response {
  return res.status(200).json(users);
}
