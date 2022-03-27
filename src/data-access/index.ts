import mongoDb from './mongo';
import postgres from './postgres';
import { config } from '@/config';
import { Db } from '@/constants/db';

import type { IDatabase } from '@/data-access/types';

const database: IDatabase = (() => {
  switch (config.app.currentDb) {
    case Db.mongodb:
      return mongoDb;
    case Db.postgres:
      return postgres;
    default:
      throw new Error('Incorrect database type!');
  }
})();

export default database;
