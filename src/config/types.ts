import type { AppError } from '@/models/error';
import type { IConnectionParameters } from 'pg-promise/typescript/pg-subset';
import type { Db } from '@/constants/db';

export interface IAppConfig {
  currentDb: Db;
  port: number;
}

export interface IAuthConfig {
  jwtSecret: string;
}

export type TErrorsConfig = Record<number, AppError>;

export interface ILoggerConfig {
  showStack: boolean;
}

export interface IPostgresConfig {
  dbConfig: IConnectionParameters;
  queryLog: boolean;
}

export interface IMongoDBConfig {
  url: string;
  database: string;
}

export interface IMongoConfig {
  dbConfig: IMongoDBConfig;
}

export interface ISessionConfig {
  duration: number;
}

export interface IConfig {
  app: IAppConfig;
  auth: IAuthConfig;
  errors: TErrorsConfig;
  logger: ILoggerConfig;
  mongodb: IMongoConfig;
  postgres: IPostgresConfig;
  session: ISessionConfig;
}
