import express from 'express';

import management from 'server/router/management';
import hangman from 'server/router/hangman';

let router = express.Router();

router.use('/', hangman);
router.use('/management', management);

export default router;