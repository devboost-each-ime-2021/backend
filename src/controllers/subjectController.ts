import { Request, Response } from 'express';

const subjects = [
  {
    id: 1,
    name: 'Calculo I',
    description: 'Materia legal de fazer conta',
    professor: 'Alexandre Ramos',
  },
  {
    id: 2,
    name: 'Introducao a programacao',
    description: 'ad;asdfsdajflkasdjkljklsadf',
    professor: 'Marcio Moretto',
  },
  {
    id: 3,
    name: 'Fundamentos de astronomia',
    description: 'planetas e esses bgl',
    professor: 'Reinaldo Santos',
  },
];

export function getSubjects(req: Request, res: Response): Response {
  return res.status(200).json(subjects);
}
