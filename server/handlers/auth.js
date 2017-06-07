import express from 'express';
import JWT from 'jsonwebtoken';
import User from 'server/models/user';
import {
	requireLogin,
	requireAuth,
} from 'server/middleware/auth';
import { JWT_SECRET } from 'server/config/constant';

const router = express.Router();

/*
	Utility Functions
 */
const generateToken = user => JWT.sign(user, JWT_SECRET);

const publicUserInfo = user => ({
  _id: user._id,
  firstName: user.profile.firstName,
  lastName: user.profile.lastName,
  email: user.email,
});

/*
	Router Detail
 */
router.get('/status', requireAuth, (req, res) => {
  if (!req.user) {
    res.status(401).end();
  }	else {
    res.status(200).end();
  }
});

router.post('/login', requireLogin, (req, res) => {
  const userInfo = publicUserInfo(req.user);
  res.status(200).json({
    token: generateToken(userInfo),
    user: userInfo,
  });
});

router.post('/register', (req, res, next) => {
  const { email, firstName, lastName, password } = req.body;

  if (!email) {
    return res.status(422).send({ error: 'You must enter an email address.' });
  }

  if (!firstName || !lastName) {
    return res.status(422).send({ error: 'You must enter your full name.' });
  }

  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' });
  }

  User.findOne({ email })
		.catch(err => next(err))
		.then((existingUser) => {
  if (existingUser) {
    return res.status(422).send({ error: 'The email is already used.' });
  }

  const user = new User({
    email,
    password,
    profile: { firstName, lastName },
  });

  user.save()
				.catch(err => next(err))
				.then((user) => {
  const userInfo = publicUserInfo(user);
  res.status(201).json({
    token: generateToken(userInfo),
    user: userInfo,
  });
});
});
});

export default router;
