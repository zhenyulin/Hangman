import mongoose from 'mongoose';

export default mongoose.model('User', {
	email: {
		type: String,
		lowercase: true,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	profile: {
		firstName: String,
		lastName: String,
	},
	resetPasswordToken: {
		type: String
	},
	resetPasswordExpires: {
		type: Date
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});