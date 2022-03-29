import type { Db } from 'mongodb';
import type { IUserDatabase } from '@/data-access/types';
import { IDBUser, IUser } from '@/data-access/mongo/types';

interface IMakeUserDbParams {
  makeDb: () => Promise<Db>;
}

export const makeUsersDb = ({ makeDb }: IMakeUserDbParams): Readonly<IUserDatabase> => {
  const findAll = async (): Promise<IUser[]> => {
    const db: Db = await makeDb();
    const result = await db.collection<IDBUser>('users').find();
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }));
  };

  const findById = async (): Promise<IDBUser> => {
    // TODO: implement logic here
  };

  const remove = async (): Promise<IUser> => {
    // TODO: implement logic here
  };

  return Object.freeze({
    findAll,
    // findByHash,
    findById,
    // findByPostId,
    // findReplies,
    // insert,
    remove,
    // update,
  });
};
