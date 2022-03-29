import type { IDatabase } from '@/data-access/types';

const db: IDatabase = {
  usersDb: (() => {
    // TODO: implement logic
    return Object.freeze({
      findAll: () => Promise.resolve([]),
    });
  })(),
};

export default db;
