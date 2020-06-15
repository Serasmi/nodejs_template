import { IConfigItem } from '@/types/routes';

export interface IUserParameters {
  login: string;
  name?: string;
  password: string;
  role: number;
}

export const add: IConfigItem = {
  fields: [
    { name: 'login', isRequired: true },
    { name: 'name' },
    { name: 'password', isRequired: true },
    { name: 'role' },
  ],
};
