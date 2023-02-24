const mongoose = require("mongoose"),
	bcrypt = require("bcrypt"),
	SALT_WORK_FACTOR = 10;

const validator = require("validator");
const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			lowercase: true,
			require: [true, "Enter an email address."],
			match: [/\S+@\S+\.\S+/, "is invalid"],
			index: { unique: true },
			lowercase: true,
			unique: [true, "That email address is taken."],
			validate: [validator.isEmail, "Enter a valid email address."],
		},
		firstName: {
			type: String,
			require: [true, "Enter an first name."],
		},
		lastName: {
			type: String,
			require: [true, "Enter an last name."],
		},
		password: { type: String, require: [true, "Enter an password."] },
		role: {
			type: String,
			require: [true, "Select user role."],
			default: "candidate"
		},
		position: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Position",
		},
		CV: {
			type: String,
		},
	},
	{ timestamps: true }
);

UserSchema.pre("save", function (next) {
	var user = this;

	if (!user.isModified("password")) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
