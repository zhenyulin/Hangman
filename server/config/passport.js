import passport from 'passport';
import User from 'server/models/user';
import {
	Strategy as JWTStrategy,
	ExtractJwt as ExtractJWT,
} from 'passport-jwt';
import LocalStrategy from 'passport-local';
import { JWT_SECRET } from 'server/config/constant';

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, next) => {
  User.findOne({ email })
		.then((user) => {
  if (!user || user.password !== password) {
    return next(null, false);
  }
  return next(null, user);
})
		.catch(err => next(err));
});

const JWTOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeader(),
  secretOrKey: JWT_SECRET,
};
const JWTLogin = new JWTStrategy(JWTOptions, (payload, next) => {
  User.findById(payload._id)
		.then(user => user ? next(null, user) : next(null, false))
		.catch(err => next(err, false));
});

passport.use(JWTLogin);
passport.use(localLogin);

passport.serializeUser((user, next) => next(null, user));
passport.deserializeUser((user, next) => next(null, user));
