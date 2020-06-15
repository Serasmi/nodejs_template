import { Router } from 'express';
import { db } from '@/db/postgres';

import { asyncMiddleware, checkParamsMiddleware } from '@middleware/index';
import { getSQLQueries } from '@routes/utils';

import * as config from './config';
import { IUserParameters } from './config';
import { ResHelper } from '@/helpers/ResHelper';

const router = Router();

const queries = getSQLQueries(__dirname);

/* Create user. */
router.post(
  '/',
  checkParamsMiddleware(config.add.fields!),
  asyncMiddleware(async (req, res /*, next*/) => {
    const parameters: Partial<IUserParameters> = config.add.fields!.reduce<Partial<IUserParameters>>(
      (acc, field) => ({
        ...acc,
        [field.name]: req.body[field.name] || null,
      }),
      {}
    );

    // TODO: how to give a default role? Might null role is equals default?!
    parameters.role = 1;

    console.log({ ...parameters });

    const { id, login, name, role } = await db.one(queries.add, { ...parameters });

    res.status(201).json(ResHelper.success({ id, login, name, role }));
  })
);

/* Read user. */
router.get(
  '/:id',
  asyncMiddleware(async (req, res /*, next*/) => {
    const { id } = req.params;
    const item = await db.any(queries.getOne, { id });

    res.json(ResHelper.success(item));
  })
);

/* Read users. */
router.get(
  '/',
  asyncMiddleware(async (req, res /*, next*/) => {
    const items = await db.any(queries.getAll);

    res.json(ResHelper.success(items));
  })
);

/* Update user. */
router.put(
  '/',
  asyncMiddleware(async (req, res /* next*/) => {
    const { id: targetId } = req.body;

    if (!targetId) {
      res.status(400).json(ResHelper.error("Missing parameter 'id'."));
      return;
    }

    const [entity] = await db.any(queries.getOne, { id: targetId });

    if (!entity) {
      res.status(400).json(ResHelper.error(`Entity with id: ${targetId} has not found.`));
      return;
    }

    const { id } = await db.one(queries.update, { ...req.body });

    res.json({ data: { id } });
  })
);

/* Delete user. */
router.delete(
  '/:id',
  asyncMiddleware(async (req, res /*, next*/) => {
    const { id } = req.params;
    const item = await db.any(queries.remove, { id });

    res.json(ResHelper.success(item));
  })
);

module.exports = router;
