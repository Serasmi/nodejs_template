import { Db, MongoClient } from 'mongodb';
import { config } from '@/config';
import { makeUsersDb } from './users';
import type { IDatabase } from '@/data-access/types';

const mongoConfig = config.mongodb.dbConfig;

const url = mongoConfig.url;
const dbName = mongoConfig.database;
const client = new MongoClient(url);

let _db: Db;

const makeDb = async (): Promise<Db> => {
  if (!_db) {
    await client.connect();
    _db = client.db(dbName);
  }

  return Promise.resolve(_db);
};

const db: IDatabase = {
  userDb: makeUsersDb({ makeDb }),
};

export default db;
