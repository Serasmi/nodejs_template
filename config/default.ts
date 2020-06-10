/** managed by https://www.npmjs.com/package/config **/
const defaultConfig = {
  app: {
    port: 9090, // port to launch server,
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
};

module.exports = {
  ...defaultConfig,
};
