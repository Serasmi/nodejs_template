import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', function (req, res /*, next*/) {
  res.send('login response');
});

export default router;
