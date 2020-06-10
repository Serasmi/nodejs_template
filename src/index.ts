import config from 'config';

import ip from 'ip';
import appPromise from './app';

const PORT = config.get('PORT');

const address = ip.address();

appPromise
  .then(({ server }) => server.listen(PORT, () => console.log(`> Listening at http://${address}:${PORT}\n`)))
  .catch((e) => {
    console.error(e);
    console.error("Can't start server");
  });
