import { Router } from 'express';
import { getSubjects, getUserSubjects } from './controllers/subjectController';
import { signIn } from './controllers/userController';

const router = Router();

router.get('/subjects', getSubjects);

router.get('/users/:id/subjects', getUserSubjects);

router.post('/login', signIn);

export default router;
