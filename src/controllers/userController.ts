import { Request, Response } from 'express';
import { DBConnection } from '../dbConnection';

export async function signIn(req: Request, res: Response): Promise<Response> {
  const { user, password } = req.body;

  const database = await DBConnection.getDB();
  const dbUsers = database.collection('users');

  let dbUser = await dbUsers.findOne({
    username: user,
    password,
  });

  if (!dbUser) {
    dbUser = await dbUsers.findOne({
      email: user,
      password,
    });
  }

  if (!dbUser) {
    return res.status(404).json({
      message: 'User or password not valid',
    });
  }

  const { _id, name, username, email } = dbUser;
  return res.status(200).json({
    id: _id,
    name,
    username,
    email,
  });
}

async function isValidUser(user: any) {
  const { name, username, email, password } = user;
  console.log(user);
  const errors: string[] = [];

  const database = await DBConnection.getDB();

  const users = database.collection('users');

  if (!name) {
    errors.push('Nome vazio');
    console.log('vazio');
  }

  if (!username) {
    errors.push('Username vazio');
  } else {
    const result = await users.findOne({ username });
    if (result) {
      errors.push('Username já existe');
    }
  }
  if (!email) {
    errors.push('Email vazio');
  } else {
    const result = await users.findOne({ email });
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

export async function insertUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, username, email, password } = req.body;
  const { isValid, errors } = await isValidUser(req.body);
  if (!isValid) {
    return res.status(400).json({
      message: errors,
    });
  }

  const newUser = {
    name,
    username,
    email,
    password,
  };

  const database = await DBConnection.getDB();

  const usersCollection = database.collection('users');

  await usersCollection.insertOne(newUser);

  delete newUser.password;

  return res.status(200).json(newUser);
}

export async function listUsers(
  req: Request,
  res: Response
): Promise<Response> {
  const database = await DBConnection.getDB();
  const dbUsers = await database.collection('users').find().toArray();
  return res.status(200).json(dbUsers);
}
