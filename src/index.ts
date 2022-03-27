import 'dotenv/config';

import ip from 'ip';
import appPromise from './app';
import { config } from '@/config';

const {
  app: { port },
} = config;

const address = ip.address();

appPromise
  .then(({ server }) => server.listen(port, () => console.log(`> Listening at http://${address}:${port}\n`)))
  .catch(e => {
    console.error('Can not start server');
    throw e;
  });
