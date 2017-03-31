import express from 'express';

import hangman from 'server/handlers/hangman';
import management from 'server/handlers/management';

let router = express.Router();

router.use('/', hangman);
router.use('/management', management);

export default router;