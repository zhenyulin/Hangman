import express from 'express';

import index from 'server/handlers/index';

let router = express.Router();

router.use('/', index);

export default router;