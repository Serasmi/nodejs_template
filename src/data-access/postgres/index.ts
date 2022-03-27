import type { IDatabase } from '@/data-access/types';

const db: IDatabase = {
  userDb: (() => {
    // TODO: implement logic
    return Object.freeze({
      findAll: () => Promise.resolve([]),
    });
  })(),
};

export default db;
