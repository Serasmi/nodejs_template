import { IUser } from '@/data-access/mongo/types';

export interface IDatabase {
  usersDb: Readonly<IUserDb>;
}

export interface IUserDb {
  findAll: () => Promise<IUser[]>;
}
