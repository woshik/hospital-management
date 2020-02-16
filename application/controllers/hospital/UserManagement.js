"use strict";

const {
	addUser,
	getUserListData,
	getUserData,
	updateUser,
	removeUser
} = require(join(MODEL_DIR, "hospital/Model_User"));

exports.viewUser = function(req, res, next) {
	randerForDashBoard(req, res, {
		title: "Users List",
		layout: "user",
		roleDataURL: web.getUserData.url
	});
};

exports.getUserData = function (req, res, next) {
	
}

exports.addUserView = function(req, res, next) {
	randerForDashBoard(req, res, {
		title: "Add User",
		layout: "user-form",
		userURL: web.addUser.url
	});
};

exports.addUser = function(req, res, next) {
	const schema = Joi.object({
		roleName: Joi.string()
			.trim()
			.pattern(/^[a-zA-Z\s]+$/)
			.required()
			.label("Role Name")
	});

	const validateResult = schema.validate({
		roleName: req.body.roleName
	});

	if (validateResult.error) {
		return res.json({
			success: false,
			message: fromErrorMessage(validateResult.error.details[0])
		});
	}

	addRole(validateResult.value.roleName, req.body)
		.then(info => res.json(info))
		.catch(err => next({ name: "addRole", info: err }));
};

exports.updateUserView = function(req, res, next) {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Add Role",
		layout: "role",
		currentURL: req.url,
		sidebar: sideBar.hospital,
		csrfToken: req.csrfToken()
	});
};

exports.updateUser = function(req, res, next) {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Add Role",
		layout: "role",
		currentURL: req.url,
		sidebar: sideBar.hospital,
		csrfToken: req.csrfToken()
	});
};

exports.removeUser = function(req, res, next) {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Add Role",
		layout: "role",
		currentURL: req.url,
		sidebar: sideBar.hospital,
		csrfToken: req.csrfToken()
	});
};
