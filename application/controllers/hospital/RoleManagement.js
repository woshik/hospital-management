"use strict";

const { addRole, getRoleData } = require(join(
	MODEL_DIR,
	"hospital/Model_Role"
));

exports.viewRole = function(req, res, next) {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Roles List",
		layout: "role",
		userData: req.user,
		currentURL: req.url,
		sidebar: sideBar.hospital,
		csrfToken: req.csrfToken(),
		roleDataURL: web.viewRoleData.url,
		logoutURL: web.logout.url
	});
};

exports.viewRoleData = function(req, res, next) {
	getRoleData(req.query)
		.then(roleList => {
			let response = [];
			roleList.list.map(role => {
				let actionBtn = "";

				if (role.permissions.updateRole) {
					actionBtn = ``;
				}

				if (role.permissions.deleteRole) {
					actionBtn = `<a href="javascript:void(0)" class="btn btn-warning btn-icon" type="button" data-toggle="modal" data-target="#appStatusChangeModal" title="Deactivate Your App" onclick="appStatusChange('${appData._id}')" data-backdrop="static">
									<i class="fas fa-toggle-off"></i>
								</a>`;
				}

				response.push([role.name, actionBtn]);
			});

			return res.json({
				data: response,
				recordsTotal: roleList.recordsTotal,
				recordsFiltered: roleList.recordsFiltered
			});
		})
		.catch(err => next({ name: "viewRoleData", info: err }));
};

exports.addRoleView = function(req, res, next) {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Add Role",
		layout: "role-form",
		userData: req.user,
		currentURL: req.url,
		sidebar: sideBar.hospital,
		csrfToken: req.csrfToken(),
		addRoleURL: web.addRole.url,
		logoutURL: web.logout.url
	});
};

exports.addRole = function(req, res, next) {
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

exports.updateRoleView = function(req, res, next) {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Add Role",
		layout: "role",
		currentURL: req.url,
		sidebar: sideBar.hospital,
		csrfToken: req.csrfToken()
	});
};

exports.updateRole = function(req, res, next) {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Add Role",
		layout: "role",
		currentURL: req.url,
		sidebar: sideBar.hospital,
		csrfToken: req.csrfToken()
	});
};

exports.removeRole = function(req, res, next) {
	res.render("hospital/base-template", {
		info: appInfo,
		title: "Add Role",
		layout: "role",
		currentURL: req.url,
		sidebar: sideBar.hospital,
		csrfToken: req.csrfToken()
	});
};
