import 'dotenv/config';

import ip from 'ip';
import startApp, { IApp } from './app';
import { config } from '@/config';

const {
  app: { port },
} = config;

const address = ip.address();

const handleAppStarted = ({ server }: IApp) => {
  server.listen(port, () => {
    console.log(`> Listening at http://${address}:${port}\n`);
  });
};

startApp()
  .then(handleAppStarted)
  .catch(e => {
    console.error('Can not start server');
    throw e;
  });
