import config from 'config';
import pgPromise, { IInitOptions } from 'pg-promise';
import { IConnectionParameters } from 'pg-promise/typescript/pg-subset';

import * as utils from './utils';

const dbConfig: IConnectionParameters = config.get('postgres.dbConfig');
const queryLog: boolean = config.get('postgres.queryLog');

const initOptions: IInitOptions = {
  query: e => {
    if (queryLog) console.log('QUERY:', e.query);
  },
  error: (err, e) => {
    console.error('pgPromise: Unexpected error on idle client', { err, eventContext: e });

    if (e.cn) {
      console.error(`pgPromise: Couldn\'t connect to DB. Connection refused by server: ${e.cn.host}:${e.cn.port}`);
    }
  },
};

export const db = pgPromise(initOptions)(dbConfig);

export interface IConnection {
  host?: string;
  port?: number;
}

const checkConnection = (): Promise<IConnection> =>
  new Promise((resolve, reject) => {
    db.connect()
      .then(obj => {
        obj.done(); // success, release the connection;
        resolve({ host: dbConfig.host, port: dbConfig.port });
      })
      .catch(e => reject(e));
  });

export const pgUtils = { ...utils, checkConnection };
