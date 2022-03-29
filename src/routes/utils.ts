import path from 'path';

import { pgUtils } from '@/db/postgres';
import { QueryFile } from 'pg-promise';
import { Request, Response, NextFunction } from 'express';
import { IControllerResult } from '@/controllers/types';

interface ISQLQueries {
  add: QueryFile;
  getAll: QueryFile;
  getOne: QueryFile;
  remove: QueryFile;
  update: QueryFile;
}

export const getSQLQueries = (dirname: string): ISQLQueries => {
  const _dirname = path.join(dirname, 'sql');

  return {
    add: pgUtils.sql(_dirname, 'add.sql'),
    getAll: pgUtils.sql(_dirname, 'getAll.sql'),
    getOne: pgUtils.sql(_dirname, 'getOne.sql'),
    remove: pgUtils.sql(_dirname, 'remove.sql'),
    update: pgUtils.sql(_dirname, 'update.sql'),
  };
};

interface IAsyncController<T = IControllerResult> {
  (req: Request): Promise<T>;
}

export const httpResponseFactory =
  (asyncController: IAsyncController) => (req: Request, res: Response, next: NextFunction) => {
    asyncController(req)
      .then(({ headers, statusCode, body }) => {
        if (headers) {
          res.set(headers);
        }
        res.type('json');
        res.status(statusCode).send(body);
      })
      .catch(() => {
        res.status(500).send({ error: 'An unknown error occurred.' });
      });
  };
