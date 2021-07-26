import { Request, Response } from 'express';
import { DBConnection } from '../dbConnection';
import { ObjectId } from 'mongodb';

export async function getSubjects(
  req: Request,
  res: Response
): Promise<Response> {
  const database = await DBConnection.getDB();

  const subjects = await database.collection('subjects').find().toArray();

  return res.status(200).json(subjects);
}

export async function getUserSubjects(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.id;

  const database = await DBConnection.getDB();
  const user = await database.collection('users').findOne({
    _id: new ObjectId(id),
  });

  if (!user) {
    return res.status(404).json({
      error: 'User not found! :(',
    });
  }

  const subjectIDs = user?.subjects;
  console.log(subjectIDs);
  const subjects = await database.collection('subjects');

  const userSubjects = (await subjects.find().toArray()).filter(
    (subject: any) => {
      return subjectIDs.find((id: ObjectId) => {
        return id.toString() === subject._id.toString();
      });
    }
  );

  console.log(userSubjects);

  return res.status(200).json(userSubjects);
}
