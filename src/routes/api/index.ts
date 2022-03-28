import { Router } from 'express';

import articlesRouter from './articles';
import usersRouter from './users';

const router = Router();

router.use('/articles', articlesRouter);
router.use('/users', usersRouter);

export default router;
