import { Router } from 'express';
import { json, urlencoded } from 'body-parser';

const router = Router();

router.use(json());
router.use(urlencoded());

/* TODO: test GET method. Remove it. */
router.get('/', function (req, res, next) {
  res.send('Welcome to Node.js template');
});

export default router;
