import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { Server } from 'http';
import { codes } from '@burdzin/coded-error';

import { pgUtils } from '@/db/postgres';

import routes from '@/routes';
import restRoutes from '@routes/rest';

import type { IResolve } from '@/models/error';
import { config } from '@/config';

// get all configuration const
const { errors } = config;

type TConfigureApp = (resolve: (res: IResolve) => void, reject: (e: Error) => void) => Promise<void>;

const configureApp: TConfigureApp = async (resolve, reject) => {
  const app = express();
  const server = new Server(app);

  // Check connection to DB
  try {
    const { host, port } = await pgUtils.checkConnection();
    console.log(`Connected to PostgreSQL server ${host}:${port}`);
  } catch (e) {
    console.error(e);
    reject(e as Error);
  }

  // Define all http errors
  codes.use(errors);

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
