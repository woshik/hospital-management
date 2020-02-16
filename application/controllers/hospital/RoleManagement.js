"use strict";

const {
	addRole,
	getRoleListData,
	getRoleData,
	updateRole,
	removeRole
} = require(join(MODEL_DIR, "hospital/Model_Role"));

exports.viewRole = function(req, res, next) {
	randerForDashBoard(req, res, {
		title: "Roles List",
		layout: "role",
		roleDataURL: web.getRoleData.url
	});
};

exports.getRoleData = function(req, res, next) {
	getRoleListData(req.query)
		.then(roleList => {
			let response = [];
			roleList.list.map(role => {
				let actionBtn = "";

				if (
					(req.user.role instanceof Array &&
						req.user.role.includes(web.updateRoleView.permitNumber)) ||
					req.user.role === 1
				) {
					actionBtn += `<a href="${web.updateRoleView.url}?id=${role._id}" class="btn bg-gradient-primary mr-1">
									<i class="fas fa-edit color-while"></i>
								</a>`;
				}

				if (
					(req.user.role instanceof Array &&
						req.user.role.includes(web.removeRole.permitNumber)) ||
					req.user.role === 1
				) {
					actionBtn += `<a href="#" class="btn btn-danger" data-toggle="modal" data-target="#deleteRoleModal" data-backdrop="static" onclick="deleteTigger('${web.removeRole.url}?id=${role._id}')">
									<i class="fas fa-trash-alt color-while"></i>
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
		.catch(err => next({ name: "getRoleData", info: err }));
};

exports.addRoleView = function(req, res, next) {
	randerForDashBoard(req, res, {
		title: "Add Role",
		layout: "role-form",
		roleURL: web.addRole.url
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
			info: fromErrorMessage(validateResult.error.details[0])
		});
	}

	delete req.body.roleName;
	let permissions = [];
	Object.entries(req.body).map(([name, number]) => {
		number.split(",").map(value => permissions.push(parseInt(value)));
	});

	addRole(validateResult.value.roleName, permissions)
		.then(info => res.json(info))
		.catch(err => next({ name: "addRole", info: err }));
};

exports.updateRoleView = function(req, res, next) {
	getRoleData(req.query.id)
		.then(data => {
			if (data) {
				randerForDashBoard(req, res, {
					title: "Update Role",
					layout: "role-form",
					roleId: req.query.id,
					roleName: data.name,
					permissions: data.permissions,
					roleURL: web.updateRole.url
				});
			} else {
				next();
			}
		})
		.catch(error => next({ name: "updateRoleView", info: error }));
};

exports.updateRole = function(req, res, next) {
	const schema = Joi.object({
		id: Joi.string()
			.trim()
			.required()
			.label("Role ID")
	});

	const validateResult = schema.validate({
		id: req.body.id
	});

	if (validateResult.error) {
		return res.json({
			success: false,
			info: fromErrorMessage(validateResult.error.details[0])
		});
	}

	let permissions = [];

	delete req.body.id;
	delete req.body.roleName;

	Object.entries(req.body).map(([name, number]) => {
		number.split(",").map(value => permissions.push(parseInt(value)));
	});

	updateRole(validateResult.value.id, permissions)
		.then(info => res.json(info))
		.catch(err => next({ name: "updateRole", info: err }));
};

exports.removeRole = function(req, res, next) {
	const schema = Joi.object({
		id: Joi.string()
			.trim()
			.required()
			.label("Role ID")
	});

	const validateResult = schema.validate({
		id: req.query.id
	});

	if (validateResult.error) {
		return res.json({
			success: false,
			info: fromErrorMessage(validateResult.error.details[0])
		});
	}

	removeRole(validateResult.value.id)
		.then(info => res.json(info))
		.catch(err => next({ name: "removeRole", info: err }));
};
