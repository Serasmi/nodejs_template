import { Router } from 'express';
import { json, urlencoded } from 'body-parser';

import users from './users';

const router = Router();

router.use(json());
router.use(urlencoded());

/* TODO: test GET method. Remove it. */
router.get('/', function (req, res, next) {
  res.send('Success: respond with a resource');
});

router.use('/users', users);

export default router;
