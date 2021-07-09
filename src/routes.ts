import { Router } from 'express';
import { getSubjects, getUserSubjects } from './controllers/subjectController';

const router = Router();

router.get('/subjects', getSubjects);

router.get('/users/:id/subjects', getUserSubjects);

export default router;
