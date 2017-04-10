import express from 'express';

import index from 'server/handlers/index';
import management from 'server/handlers/management';

let router = express.Router();

router.use('/management', management);
router.use('/', index);

export default router;