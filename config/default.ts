import { errors } from './errors';

/** managed by https://www.npmjs.com/package/config **/
const defaultConfig = {
  app: {
    port: 9090, // port to launch server,
  },
  auth: {
    jwtSecret: '859ba29e-af11-11ea-b3de-0242ac130004', // jwt generation secret
  },
  errors,
  logger: {
    showStack: false,
  },
  postgres: {
    dbConfig: {
      host: 'localhost',
      port: 5432,
      database: 'node_template',
      user: 'temp_user',
      password: 'password',
      max: 30, // use up to 30 connections
    },
    queryLog: false,
  },
  session: {
    duration: 60 * 60, // in seconds
  },
};

module.exports = {
  ...defaultConfig,
};
