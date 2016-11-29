import express from 'express';
import hangman from './handlers/hangman';
import management from './handlers/management';

let router = express.Router();

router.use('/management', management);
router.use('/', hangman);

export default router;