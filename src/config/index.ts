import { envVarsSchema } from './utils/validation';
import { errors } from '@/config/errors';

import type { IConfig } from './types';

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config: IConfig = {
  app: {
    port: 9090,
  },
  auth: {
    jwtSecret: envVars.AUTH_TOKEN,
  },
  errors,
  logger: {
    showStack: false,
  },
  postgres: {
    dbConfig: {
      host: envVars.POSTGRES_HOST,
      port: envVars.POSTGRES_PORT,
      database: envVars.POSTGRES_DATABASE,
      user: envVars.POSTGRES_USER,
      password: envVars.POSTGRES_PASSWORD,
      max: 30,
    },
    queryLog: false,
  },
  session: {
    duration: 60 * 60, // in seconds
  },
};

export type { IConfig } from './types';
