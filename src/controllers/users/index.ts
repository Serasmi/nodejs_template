import { handleError } from '@/controllers/utils';

import type { Request } from 'express';
import type { IUserDatabase } from '@/data-access/types';
import type { IControllerResult } from '@/controllers/types';
import type { IUser } from '@/data-access/mongo/types';

export const usersControllerFactory = (db: IUserDatabase) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const deleteUsers = async (req: Request): Promise<IControllerResult<IUser>> => {
    const userId = req.params.id;

    if (!userId) {
      return handleError<IUser>(new Error('You must supply a user id.'));
    }

    try {
      const userToDelete = await db.findById(userId);

      if (!userToDelete) {
        return handleError<IUser>(new Error('User not found, nothing to delete.'), { statusCode: 404 });
      }

      const deletedUser = await db.remove(userToDelete);

      return {
        headers,
        statusCode: 200,
        body: deletedUser,
      };
    } catch (e) {
      return handleError(e as Error);
    }
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
      return handleError(e as Error);
    }
  };

  const patchUsers = async (): Promise<IControllerResult<IUser>> => {
    // TODO: implement logic here
  };

  const postUsers = async (): Promise<IControllerResult<IUser>> => {
    // TODO: implement logic here
  };

  return { deleteUsers, getUsers, patchUsers, postUsers };
};
