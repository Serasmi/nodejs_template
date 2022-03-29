import { Router } from 'express';

import { usersControllerFactory } from '@/controllers/users';
import { httpResponseFactory } from '@routes/utils';

import type { IUserDb } from '@/data-access/types';

const makeUsersRouter = (usersDb: IUserDb) => {
  const router = Router();
  const { getUsers } = usersControllerFactory(usersDb);

  router.get('/', httpResponseFactory(getUsers));

  return router;
};

export default makeUsersRouter;
