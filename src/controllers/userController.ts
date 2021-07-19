import { Request, Response } from 'express';
import { users, User, users_subjects } from '../db';

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

function isValidUser(user: User) {
  const { name, username, email, password } = user;
  console.log(user);
  const errors: string[] = [];

  if (!name) {
    errors.push('Nome vazio');
    console.log('vazio');
  }

  if (!username) {
    errors.push('Username vazio');
  } else {
    const result = users.find((u) => u.username === username);
    if (result) {
      errors.push('Username já existe');
    }
  }
  if (!email) {
    errors.push('Email vazio');
  } else {
    const result = users.find((u) => u.email === email);
    if (result) {
      errors.push('Email já existente');
    } else {
      const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      if (!regex.test(email)) {
        errors.push('Formato de email inválido');
      }
    }
  }
  if (!password) {
    errors.push('Senha vazia');
  } else if (password.length < 6) {
    errors.push('Senha com menos de 6 caracteres');
  }

  if (errors.length > 0) {
    return {
      isValid: false,
      errors,
    };
  }

  return {
    isValid: true,
  };
}

export function insertUser(req: Request, res: Response): Response {
  const { name, username, email, password } = req.body;
  const { isValid, errors } = isValidUser(req.body);
  if (!isValid) {
    return res.status(400).json({
      message: errors,
    });
  }

  const lastId = users[users.length - 1].id;

  const newUser = {
    id: lastId + 1,
    name,
    username,
    email,
    password,
  } as User;

  users.push(newUser);
  users_subjects.push({
    id: newUser.id,
    subjects: [],
  });

  const response = Object.assign({}, newUser) as any;
  delete response.password;

  return res.status(200).json(response);
}

export function listUsers(req: Request, res: Response): Response {
  return res.status(200).json(users);
}
