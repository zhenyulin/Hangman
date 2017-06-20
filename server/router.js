import express from 'express';

import auth from 'server/handlers/auth';

const router = express.Router();

router.use('/auth', auth);

export default router;
