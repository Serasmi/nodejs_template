import { Router } from 'express';
import { db, pgUtils } from '@/db/postgres';

const router = Router();

const getAllMethod = pgUtils.sql(__dirname, 'getAll.sql');

/* GET user listing. */
router.get('/', function (req, res /*next*/) {
  const items = db.any(getAllMethod);

  console.log(items);

  res.send('user list');
});

export default router;
