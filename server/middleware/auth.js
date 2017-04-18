import passport from 'passport';

export const requireAuth = passport.authenticate('jwt', { session: false });
export const requireLogin = passport.authenticate('local', { session: false });

// export const requireRoleAuth = role => (req, res, next) => {
// 	User.findById(req.user._id)
// 		.catch(err => {
// 			res.status(422).json({ error: 'No user was found.' });
// 			return next(err);
// 		})
// 		.then(user => {
// 			if (user.role === role){
// 				return next();
// 			}

// 			res.status(401).json({ error: 'Unauthorized'});
// 			return next('Unauthorized');
// 		});
// };