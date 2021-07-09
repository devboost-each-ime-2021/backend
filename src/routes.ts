import { Router } from 'express';
import { helloMessage } from './controller';

const router = Router();

router.get('/:name', helloMessage);

export default router;
