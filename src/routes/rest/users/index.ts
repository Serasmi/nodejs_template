import { Router } from 'express';
import { db } from '@/db/postgres';

import { asyncMiddleware, checkParamsMiddleware } from '@middleware/index';
import { getSQLQueries } from '@routes/utils';

import * as config from './config';
import { IAddParameters } from './config';

const router = Router();

const queries = getSQLQueries(__dirname);

/* Get users. */
router.get(
  '/',
  asyncMiddleware(async (req, res /*, next*/) => {
    const items = await db.any(queries.getAll);

    res.json({ data: items });
  })
);

/* Get user. */
router.get(
  '/:id',
  asyncMiddleware(async (req, res /*, next*/) => {
    const { id } = req.params;
    const item = await db.any(queries.getOne, { id });

    res.json({ data: item });
  })
);

/* Create user. */
router.post(
  '/',
  checkParamsMiddleware(config.add.fields!),
  asyncMiddleware(async (req, res /*, next*/) => {
    const parameters: Partial<IAddParameters> = config.add.fields!.reduce<Partial<IAddParameters>>(
      (acc, field) => ({
        ...acc,
        [field.name]: req.body[field.name] || null,
      }),
      {}
    );

    // TODO: how to give a default role? Might null role is equals default?!
    parameters.role = 1;

    const { id, login, name, role } = await db.one(queries.add, { parameters });

    res.status(201);
    res.json({ data: { id, login, name, role } });
  })
);

/* Delete user. */
router.delete(
  '/:id',
  asyncMiddleware(async (req, res /*, next*/) => {
    const { id } = req.params;
    const item = await db.any(queries.remove, { id });

    res.json({ data: item });
  })
);

module.exports = router;
