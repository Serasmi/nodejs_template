import config from 'config';

import ip from 'ip';
import appPromise from './app';

const port = config.get('app.port');

const address = ip.address();

appPromise
  .then(({ server }) => server.listen(port, () => console.log(`> Listening at http://${address}:${port}\n`)))
  .catch((e) => {
    console.error(e);
    console.error("Can't start server");
  });
