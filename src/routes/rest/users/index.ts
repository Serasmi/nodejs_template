import { Router } from 'express';
import { db } from '@/db/postgres';

import { asyncMiddleware, checkParamsMiddleware } from '@middleware/index';
import { getSQLQueries } from '@routes/utils';

import * as config from './config';
import { IAddParameters } from './config';

const router = Router();

const queries = getSQLQueries(__dirname);

/* GET list of users. */
router.get(
  '/',
  asyncMiddleware(async (req, res /*, next*/) => {
    const items = await db.any(queries.getAll);

    res.json({ data: items });
  })
);

/* GET one users. */
router.get(
  '/:id',
  asyncMiddleware(async (req, res /*, next*/) => {
    const { id } = req.params;
    const item = await db.any(queries.getOne, { id });

    res.json({ data: item });
  })
);

/* GET one users. */
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

module.exports = router;
