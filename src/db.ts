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

export interface SubjectSectionItem {
  id: number;
  title: string;
  subject_section_id: number;
}

export interface SubjectSection {
  id: number;
  title: string;
  subject_id: number;
}

export const sectionItems: SubjectSectionItem[] = [
  { id: 1, title: 'Derivada logarítima', subject_section_id: 1 },
  { id: 2, title: "Regra de L'Hospital", subject_section_id: 1 },
  { id: 3, title: 'X tendendo a A', subject_section_id: 2 },
  { id: 4, title: 'Definição precisa de limite', subject_section_id: 2 },
  { id: 5, title: '* e demais', subject_section_id: 3 },
  { id: 6, title: 'maloca', subject_section_id: 3 },
  { id: 7, title: 'busca binaria', subject_section_id: 4 },
  { id: 8, title: 'busca sequencial', subject_section_id: 4 },
  { id: 9, title: 'segunda lei de kepler', subject_section_id: 5 },
  { id: 10, title: 'terceira lei de kepler', subject_section_id: 5 },
];

export const sections: SubjectSection[] = [
  {
    id: 1,
    title: 'Derivada',
    subject_id: 1,
  },
  {
    id: 2,
    title: 'Limites',
    subject_id: 1,
  },
  {
    id: 3,
    title: 'Ponteiros',
    subject_id: 2,
  },
  {
    id: 4,
    title: 'Vetores',
    subject_id: 2,
  },
  {
    id: 5,
    title: 'Leis de Kepler',
    subject_id: 3,
  },
];

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
