import { IUser } from '@/data-access/mongo/types';

export interface IDatabase {
  userDb: Readonly<IMakeUserDb>;
}

export interface IMakeUserDb {
  findAll: () => Promise<IUser[]>;
}
