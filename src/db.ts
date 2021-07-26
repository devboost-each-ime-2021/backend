//export interface Subject {
//id: number;
//name: string;
//description: string;
//professor: string;
//}

//export interface User {
//id: number;
//name: string;
//username: string;
//email: string;
//password: string;
//}

//export interface UserSubject {
//id: number;
//subjects: number[];
//}

//export interface SubjectSectionItem {
//id: number;
//title: string;
//subject_section_id: number;
//}

//export interface SubjectSection {
//id: number;
//title: string;
//subject_id: number;
//}

//import { ObjectId } from 'mongodb';

//console.log(new ObjectId());

//export const sectionItems: SubjectSectionItem[] = [
//{ _id: ObjectId(), title: 'Derivada logarítima'},
//{ _id: ObjectId(), title: "Regra de L'Hospital"},
//{ _id: ObjectId(), title: 'X tendendo a A'},
//{ _id: ObjectId(), title: 'Definição precisa de limite'},
//{ _id: ObjectId(), title: '* e demais'},
//{ _id: 6, title: 'maloca'},
//{ _id: 7, title: 'busca binaria'},
//{ _id: 8, title: 'busca sequencial'},
//{ _id: 9, title: 'segunda lei de kepler'},
//{ _id: 10, title: 'terceira lei de kepler'},
//];

//export const sectionItems = [
//{ title: 'Derivada logarítima' },
//{ title: "Regra de L'Hospital" },
//{ title: 'X tendendo a A' },
//{ title: 'Definição precisa de limite' },
//{ title: '* e demais' },
//{ title: 'maloca' },
//{ title: 'busca binaria' },
//{ title: 'busca sequencial' },
//{ title: 'segunda lei de kepler' },
//{ title: 'terceira lei de kepler' },
//];
//export const sections = [
//{
//_id: new ObjectId(),
//title: 'Derivada',
//items: [sectionItems[0], sectionItems[1]],
//},
//{
//_id: new ObjectId(),
//title: 'Limites',
//items: [sectionItems[2], sectionItems[3]],

//},
//{
//_id: new ObjectId(),
//title: 'Ponteiros',
//items: [sectionItems[4], sectionItems[5]],
//},
//{
//_id: new ObjectId(),
//title: 'Algoritmos de busca',
//items: [sectionItems[6], sectionItems[7]],
//},
//{
//_id: new ObjectId(),
//title: 'Leis de Kepler',
//items: [sectionItems[8], sectionItems[9]],
//},
//];

//export const subjects = [
//{
//name: 'Calculo I',
//description: 'Materia legal de fazer conta',
//professor: 'Alexandre Ramos',
//sections: [sections[0], sections[1]],
//},
//{
//name: 'Introducao a programacao',
//description: 'Muito codigo',
//professor: 'Marcio Moretto',
//sections: [sections[2], sections[3]],
//},
//{
//name: 'Fundamentos de astronomia',
//description: 'planetas e esses bgl',
//professor: 'Reinaldo Santos',
//sections: [sections[5]],
//},
//];

//export const users = [
//{
//id: 1,
//name: 'Roberto Carlos',
//username: 'robertinhodograu',
//email: 'robertocarlosobrabo@email.com',
//password: 'senhabemsegura',
//},
//{
//id: 2,
//name: 'Geraldonimo Dias',
//username: 'geraldao',
//email: 'geraldonimo.dias@email.com',
//password: 'senhabemsegura',
//},
//{
//id: 3,
//name: 'Abigaildo Lima',
//username: 'ablima',
//email: 'abigaildolima@email.com',
//password: 'senhabemsegura',
//},
//{
//id: 4,
//name: 'Giuseppe Cadura',
//username: 'pecadura123',
//email: 'giuseppe.cadura@email.com',
//password: 'senhabemsegura',
//},
//];

//export const users_subjects = [
//{
//id: 1,
//subjects: [2, 3],
//},
//{
//id: 2,
//subjects: [1, 2],
//},
//{
//id: 3,
//subjects: [1, 3],
//},
//];

//import { DBConnection } from './dbConnection';

//async function bootstrap() {
//const db = await DBConnection.getDB();

//const dbsubjects = db.collection('subjects');

//await dbsubjects.deleteMany({});

//await dbsubjects.insertMany(subjects);

//console.log('passou caraiii!!');
//}

//bootstrap();
