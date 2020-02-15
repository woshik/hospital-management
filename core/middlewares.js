"use strict";

exports.isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	} else {
		return res.redirect(web.login.url);
	}
};

exports.CanNotAccessAfterLogin = (req, res, next) => {
	if (req.isAuthenticated()) {
		return res.redirect(web.dashboardView.url);
	} else {
		return next();
	}
};

exports.flash = (req, res, next) => {
	if (req.flash) return next();

	req.flash = (type, msg) => {
		if (type && msg) {
			let temp = {};
			temp[type] = msg;
			req.session.flash = temp;
			temp = null;
		} else if (type) {
			msg = req.session.flash && !!req.session.flash[type] ? req.session.flash[type] : false;
			req.session.flash = null;
			return msg;
		} else {
			return false;
		}
	};

	next();
};
