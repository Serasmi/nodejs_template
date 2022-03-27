import type { Db } from 'mongodb';
import type { IMakeUserDb } from '@/data-access/types';
import { IDBUser, IUser } from '@/data-access/mongo/types';

interface IMakeUserDbParams {
  makeDb: () => Promise<Db>;
}

export const makeUsersDb = ({ makeDb }: IMakeUserDbParams): Readonly<IMakeUserDb> => {
  const findAll = async (): Promise<IUser[]> => {
    const db: Db = await makeDb();
    const result = await db.collection<IDBUser>('users').find();
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }));
  };

  return Object.freeze({
    findAll,
    /*findByHash,
    findById,
    findByPostId,
    findReplies,
    insert,
    remove,
    update,*/
  });
};
