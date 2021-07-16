import { Request, Response } from 'express';
import { subjects, users_subjects, sections, sectionItems } from '../db';

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

  const userSubjects = subjectIDs
    ?.map((subjectID) => {
      return subjects.find((subject) => {
        return subject.id === subjectID;
      });
    })
    .map((subject) => {
      const subjectSections = sections
        .filter((section) => subject?.id === section.subject_id)
        .map((section) => {
          const items = sectionItems.filter(
            (item) => section.id === item.subject_section_id
          );
          return { ...section, items };
        });

      return { ...subject, sections: subjectSections };
    });

  return res.status(200).json(userSubjects);
}
