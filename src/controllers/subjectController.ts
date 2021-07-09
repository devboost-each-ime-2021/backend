import { Request, Response } from 'express';
import { subjects, users_subjects } from '../db';

export function getSubjects(req: Request, res: Response): Response {
  return res.status(200).json(subjects);
}

export function getUserSubjects(req: Request, res: Response): Response {
  const id = req.params.id;

  const userSubject = users_subjects.find((user) => {
    return user.id === Number(id);
  });

  if (userSubject === undefined) {
    return res.status(404).json({
      error: 'User not found! :(',
    });
  }

  const subjectIDs = userSubject?.subjects;

  const userSubjects = subjectIDs?.map((subjectID) => {
    return subjects.find((subject) => {
      return subject.id === subjectID;
    });
  });

  return res.status(200).json(userSubjects);
}
