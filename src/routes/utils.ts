import path from 'path';

import { pgUtils } from '@/db/postgres';
import { QueryFile } from 'pg-promise';

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
