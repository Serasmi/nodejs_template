import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { Server } from 'http';

import { pgUtils } from '@/db/postgres';

import routes from '@/routes';
import restRoutes from '@routes/rest';

import { IResolve } from '@/types/app';

const configureApp = async (resolve: (arg0: IResolve) => void, reject: Function) => {
  const app = express();
  const server = new Server(app);

  // Check connection to DB
  try {
    const { host, port } = await pgUtils.checkConnection();
    console.log(`Connected to PostgreSQL server ${host}:${port}`);
  } catch (e) {
    console.error(e);
    reject(e);
  }

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', routes);

  app.use('/api/v1', restRoutes);

  resolve({ server });
};

export default new Promise(configureApp);
