"use strict";

const passport = require("passport");

exports.loginView = (req, res) => {
	res.render("login/hospital", {
		info: appInfo,
		title: "Hospital Login",
		csrfToken: req.csrfToken(),
		loginFormURL: web.login.url,
		flashMessage: req.flash("loginPageMessage")
	});
};

exports.login = (req, res, next) => {
	const schema = Joi.object({
		username: Joi.string()
			.trim()
			.required()
			.label("Username"),
		password: Joi.string()
			.trim()
			.min(5)
			.max(50)
			.label("Password")
	});

	const validateResult = schema.validate({
		username: req.body.username,
		password: req.body.password
	});

	if (validateResult.error) {
		return res.json({
			success: false,
			message: fromErrorMessage(validateResult.error.details[0])
		});
	}

	passport.authenticate("hospital", function(err, user, info) {
		if (err) {
			return next(err);
		} else if (!user) {
			return res.json({
				success: false,
				message: info.message
			});
		} else {
			req.login(user, err => {
				if (!!err) {
					return next(err);
				} else {
					return res.json({
						success: true,
						message: web.dashboardView.url
					});
				}
			});
		}
	})(req, res, next);
};

exports.logout = (req, res) => {
	req.logout();
	req.flash("loginPageMessage", "Successfully Logout");
	res.redirect(web.login.url);
};