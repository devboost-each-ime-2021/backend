import { Router } from 'express';
import { getSubjects, getUserSubjects } from './controllers/subjectController';
import { signIn, insertUser, listUsers } from './controllers/userController';

const router = Router();

router.get('/subjects', getSubjects);

router.post('/users', insertUser);
router.get('/users', listUsers);
router.get('/users/:id/subjects', getUserSubjects);

router.post('/login', signIn);

export default router;
