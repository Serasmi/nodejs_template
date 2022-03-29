import type { IUserDb } from '@/data-access/types';
import type { IControllerResult } from '@/controllers/types';
import type { IUser } from '@/data-access/mongo/types';

export const usersControllerFactory = (db: IUserDb) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const getUsers = async (): Promise<IControllerResult<IUser[]>> => {
    try {
      const users = await db.findAll();
      return {
        headers,
        statusCode: 200,
        body: users,
      };
    } catch (e) {
      // TODO: implement error handler depending on error type
      const err = e as Error;
      // TODO: Error logging
      console.log(err);
      return {
        headers,
        statusCode: 400,
        body: {
          error: err.message,
        },
      };
    }
  };

  return { getUsers };
};
