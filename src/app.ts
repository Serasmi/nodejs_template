import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { Server } from 'http';
import { codes } from '@burdzin/coded-error';

// import { pgUtils } from '@/db/postgres';

import rootRouter from '@/routes';
import apiRouter from '@routes/api';

import { config } from '@/config';

// get all configuration const
const { errors } = config;

export interface IApp {
  server: Server;
}

const startApp = async (): Promise<IApp> => {
  const app = express();
  const server = new Server(app);

  // Check connection to DB
  // TODO: should I check connect to DB here?
  // const { host, port } = await pgUtils.checkConnection();
  // console.log(`Connected to PostgreSQL server ${host}:${port}`);

  // Define all http errors
  codes.use(errors);

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // Routes
  app.use('/', rootRouter);
  app.use('/api', apiRouter);

  return { server };
};

export default startApp;
