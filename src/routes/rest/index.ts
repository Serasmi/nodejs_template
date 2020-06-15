import { Router } from 'express';
import { json, urlencoded } from 'body-parser';
import { notFoundMiddleware } from '@middleware/notFoundMiddleware';
import { errorHandlerMiddleware } from '@middleware/errorHandlerMiddleware';

const router = Router();

router.use(json());
router.use(urlencoded());

router.use('/auth', require('./auth'));
router.use('/users', require('./users'));

router.use(notFoundMiddleware);
router.use(errorHandlerMiddleware);

export default router;
