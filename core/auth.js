"use strict";

const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { hospital, login } = require(join(MODEL_DIR, "login/Model_Login"));

module.exports = app => {
	passport.use(
		"hospital",
		new localStrategy(
			{
				usernameField: "username"
			},
			(username, password, done) => {
				hospital(username, password)
					.then(({ success, info }) => {
						if (success) {
							return done(null, info);
						} else {
							return done(null, false, {
								message: info
							});
						}
					})
					.catch(err => done(err));
			}
		)
	);

	passport.serializeUser((info, done) => done(null, info));

	passport.deserializeUser((info, done) =>
		login(info)
			.then(data => done(null, data))
			.catch(err => done(err))
	);

	app.use(passport.initialize());
	app.use(passport.session());
};
