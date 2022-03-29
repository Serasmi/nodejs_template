import { Router } from 'express';
import { usersControllerFactory } from '@/controllers/users';

import DB from '../../../data-access';
import { httpResponseFactory } from '@routes/utils';

const router = Router();

const usersController = usersControllerFactory(DB.usersDb);

router.get('/', httpResponseFactory(usersController.getUsers));

export default router;
