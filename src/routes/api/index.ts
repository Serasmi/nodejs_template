import { Router } from 'express';

import articlesRouter from './articles';
import makeUsersRouter from './users';

import type { IDatabase } from '@/data-access/types';

const makeApiRouter = (db: IDatabase) => {
  const router = Router();

  router.use('/articles', articlesRouter);
  router.use('/users', makeUsersRouter(db.usersDb));

  return router;
};

export default makeApiRouter;
