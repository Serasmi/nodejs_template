import { Db, MongoClient } from 'mongodb';
import { config } from '@/config';
import { makeUsersDb } from './users';
import type { IDatabase } from '@/data-access/types';

const mongoConfig = config.mongodb.dbConfig;

const url = mongoConfig.url;
const dbName = mongoConfig.database;
const client = new MongoClient(url);

let dbInstance: Db;

const makeDb = async (): Promise<Db> => {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db(dbName);
  }

  return dbInstance;
};

const db: IDatabase = {
  usersDb: makeUsersDb({ makeDb }),
};

export default db;
