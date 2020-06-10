import { Router } from 'express';
import { json, urlencoded } from 'body-parser';

import auth from './auth';
import user from './user';

const router = Router();

router.use(json());
router.use(urlencoded());

router.use('/auth', auth);
router.use('/user', user);

export default router;
