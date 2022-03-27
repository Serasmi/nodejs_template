import type { AppError } from '@/models/error';
import type { IConnectionParameters } from 'pg-promise/typescript/pg-subset';

export interface IAppConfig {
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

export interface ISessionConfig {
  duration: number;
}

export interface IConfig {
  app: IAppConfig;
  auth: IAuthConfig;
  errors: TErrorsConfig;
  logger: ILoggerConfig;
  postgres: IPostgresConfig;
  session: ISessionConfig;
}
