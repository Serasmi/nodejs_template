import { Document } from 'mongodb';

export interface IUser extends Document {
  id: string;
}

export interface IDBUser extends Omit<IUser, 'id'> {
  _id: string;
}
