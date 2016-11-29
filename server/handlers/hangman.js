import express from 'express';
import path from 'path';

const router = express.Router();

router.use('/', (req,res) => {
	res.sendFile(path.join(__dirname + '../client/index.html'));
});

export default router;