import { IDBUser, IUser } from '@/data-access/mongo/types';

export interface IDatabase {
  usersDb: Readonly<IUserDatabase>;
}

export interface IUserDatabase {
  findAll: () => Promise<IUser[]>;
  findById: (id: string) => Promise<IDBUser>;
  remove: (user: IDBUser) => Promise<IUser>;
}
