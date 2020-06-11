import { Router } from 'express';
import { json, urlencoded } from 'body-parser';

const router = Router();

router.use(json());
router.use(urlencoded());

router.use('/auth', require('./auth'));
router.use('/users', require('./users'));

export default router;
