import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	const played = req.store.getState().toJS().played;
	res.send(played);
});

export default router;