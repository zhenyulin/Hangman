import express from 'express';

import index from 'server/handlers/index';
import auth from 'server/handlers/auth';

const router = express.Router();

router.use('/auth', auth);
router.use('/', index);

export default router;
