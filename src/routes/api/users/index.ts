import { Router } from 'express';

import { usersControllerFactory } from '@/controllers/users';
import { httpResponseFactory } from '@routes/utils';
import notFound from '@routes/notFound';

import type { IUserDatabase } from '@/data-access/types';

const makeUsersRouter = (usersDb: IUserDatabase) => {
  const router = Router();
  const { deleteUsers, getUsers, patchUsers, postUsers } = usersControllerFactory(usersDb);

  router.post('/', httpResponseFactory(postUsers));
  router.get('/', httpResponseFactory(getUsers));
  router.patch('/:id', httpResponseFactory(patchUsers));
  router.delete('/:id', httpResponseFactory(deleteUsers));
  router.use(httpResponseFactory(notFound));

  return router;
};

export default makeUsersRouter;
