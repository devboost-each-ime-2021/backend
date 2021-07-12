export interface Subject {
  id: number;
  name: string;
  description: string;
  professor: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface UserSubject {
  id: number;
  subjects: number[];
}

export const subjects: Subject[] = [
  {
    id: 1,
    name: 'Calculo I',
    description: 'Materia legal de fazer conta',
    professor: 'Alexandre Ramos',
  },
  {
    id: 2,
    name: 'Introducao a programacao',
    description: 'Muito codigo',
    professor: 'Marcio Moretto',
  },
  {
    id: 3,
    name: 'Fundamentos de astronomia',
    description: 'planetas e esses bgl',
    professor: 'Reinaldo Santos',
  },
];

export const users: User[] = [
  {
    id: 1,
    name: 'Roberto Carlos',
    username: 'robertinhodograu',
    email: 'robertocarlosobrabo@email.com',
    password: 'senhabemsegura',
  },
  {
    id: 2,
    name: 'Geraldonimo Dias',
    username: 'geraldao',
    email: 'geraldonimo.dias@email.com',
    password: 'senhabemsegura',
  },
  {
    id: 3,
    name: 'Abigaildo Lima',
    username: 'ablima',
    email: 'abigaildolima@email.com',
    password: 'senhabemsegura',
  },
  {
    id: 4,
    name: 'Giuseppe Cadura',
    username: 'pecadura123',
    email: 'giuseppe.cadura@email.com',
    password: 'senhabemsegura',
  },
];

export const users_subjects: UserSubject[] = [
  {
    id: 1,
    subjects: [2, 3],
  },
  {
    id: 2,
    subjects: [1, 2],
  },
  {
    id: 3,
    subjects: [1, 3],
  },
];
