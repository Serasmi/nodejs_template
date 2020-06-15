import { Router } from 'express';
import { asyncMiddleware } from '@/middleware';
import { getJsonWebToken } from '@utils/getJsonWebToken';

const router = Router();

/* Read users. */
router.post(
  '/',
  asyncMiddleware(async (req, res /*, next*/) => {
    const { login, password } = req.body;

    /* generate jwt token */
    const { payload, token } = getJsonWebToken({ login });

    res.json({ data: { token } });
  })
);

export default router;
