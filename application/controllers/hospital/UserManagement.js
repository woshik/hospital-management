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
		userDataURL: web.getUserData.url,
		addUserURL: web.addUserView.url
	});
};

exports.getUserData = function(req, res, next) {
	getUserListData(req.query)
		.then(userList => {
			let response = userList.list.map(user => {
				let actionBtn = "";

				if (
					(req.user.role instanceof Array &&
						req.user.role.includes(
							web.updateUserView.permitNumber
						)) ||
					req.user.role === 1
				) {
					actionBtn += `<a href="${web.updateUserView.url}?id=${user._id}" class="btn bg-gradient-primary mr-1">
									<i class="fas fa-edit color-while"></i>
								</a>`;
				}

				
				actionBtn += `<a href="${web.updateUserView.url}?id=${user._id}" class="btn bg-gradient-primary mr-1">
								<i class="fas fa-edit color-while"></i>
							</a>`;
				

				if (
					(req.user.role instanceof Array &&
						req.user.role.includes(web.removeUser.permitNumber)) ||
					req.user.role === 1
				) {
					actionBtn += `<a href="#" class="btn btn-danger" data-toggle="modal" data-target="#deleteRoleModal" data-backdrop="static" onclick="deleteTigger('${web.removeUser.url}?id=${user._id}')">
									<i class="fas fa-trash-alt color-while"></i>
								</a>`;
				}

				return [
					user.username,
					`${user.f_name} ${user.l_name ? user.l_name : ""}`,
					user.role,
					user.email,
					actionBtn
				];
			});

			return res.json({
				data: response,
				recordsTotal: userList.recordsTotal,
				recordsFiltered: userList.recordsFiltered
			});
		})
		.catch(err => next({ name: "getUserData", info: err }));
};

exports.addUserView = function(req, res, next) {
	randerForDashBoard(req, res, {
		title: "Add User",
		layout: "user-form",
		userURL: web.addUser.url,
		roleDataURL: web.getRoleDataForUser.url
	});
};

exports.addUser = function(req, res, next) {
	const schema = Joi.object({
		f_name: Joi.string()
			.trim()
			.pattern(/^[a-zA-Z\s]+$/)
			.required()
			.label("First Name"),
		username: Joi.string()
			.trim()
			.pattern(/^[a-zA-Z0-9\-\.\s]+$/)
			.lowercase()
			.required()
			.label("Username"),
		role: Joi.string()
			.trim()
			.required()
			.label("Role"),
		password: Joi.string()
			.trim()
			.min(6)
			.max(50)
			.required()
			.label("Password"),
		confirm_password: Joi.ref("password")
	});

	const validateResult = schema.validate({
		f_name: req.body.f_name,
		username: req.body.username,
		role: req.body.role,
		password: req.body.password,
		confirm_password: req.body.confirm_password
	});

	if (validateResult.error) {
		console.log(validateResult.error);
		return res.json({
			success: false,
			info: fromErrorMessage(validateResult.error.details[0])
		});
	}

	Object.assign(req.body, validateResult.value);
	delete req.body.confirm_password;

	addUser(req.body)
		.then(info => res.json(info))
		.catch(err => next({ name: "addUser", info: err }));
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
