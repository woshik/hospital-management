"use strict";

const {
	addPatient,
	getPatientListData,
	getPatientData,
	updatePatient,
	removePatient,
	getPatientsData
} = require(join(MODEL_DIR, "hospital/Model_Patient"));

exports.viewPatient = function(req, res, next) {
	randerForDashBoard(req, res, {
		title: "Patients List",
		layout: "patient",
	});
};

exports.getPatientData = function(req, res, next) {
	getPatientListData(req.query)
		.then(PatientList => {
			let response = PatientList.list.map(Patient => {
				let actionBtn = "";

				if (
					(req.user.Patient instanceof Array &&
						req.user.Patient.includes(web.updatePatientView.permitNumber)) ||
					req.user.Patient === 1
				) {
					actionBtn += `<a href="${web.updatePatientView.url}?id=${Patient._id}" class="btn bg-gradient-primary mr-1">
									<i class="fas fa-edit color-while"></i>
								</a>`;
				}

				if (
					(req.user.Patient instanceof Array &&
						req.user.Patient.includes(web.removePatient.permitNumber)) ||
					req.user.Patient === 1
				) {
					actionBtn += `<a href="#" class="btn btn-danger" data-toggle="modal" data-target="#deletePatientModal" data-backdrop="static" onclick="deleteTigger('${web.removePatient.url}?id=${Patient._id}')">
									<i class="fas fa-trash-alt color-while"></i>
								</a>`;
				}

				return [Patient.name, actionBtn];
			});

			return res.json({
				data: response,
				recordsTotal: PatientList.recordsTotal,
				recordsFiltered: PatientList.recordsFiltered
			});
		})
		.catch(err => next({ name: "getPatientData", info: err }));
};

exports.addPatientView = function(req, res, next) {
	randerForDashBoard(req, res, {
		title: "Add Patient",
		layout: "patient-form",
	});
};

exports.addPatient = function(req, res, next) {
	const schema = Joi.object({
		PatientName: Joi.string()
			.trim()
			.pattern(/^[a-zA-Z\s]+$/)
			.required()
			.label("Patient Name")
	});

	const validateResult = schema.validate({
		PatientName: req.body.PatientName
	});

	if (validateResult.error) {
		return res.json({
			success: false,
			info: fromErrorMessage(validateResult.error.details[0])
		});
	}

	delete req.body.PatientName;
	let permissions = [];
	Object.entries(req.body).map(([name, number]) => {
		number.split(",").map(value => permissions.push(parseInt(value)));
	});

	addPatient(validateResult.value.PatientName, permissions)
		.then(info => res.json(info))
		.catch(err => next({ name: "addPatient", info: err }));
};

exports.updatePatientView = function(req, res, next) {
	getPatientData(req.query.id)
		.then(data => {
			if (data) {
				randerForDashBoard(req, res, {
					title: "Update Patient",
					layout: "Patient-form",
					PatientId: req.query.id,
					PatientName: data.name,
					permissions: data.permissions,
					PatientURL: web.updatePatient.url
				});
			} else {
				next();
			}
		})
		.catch(error => next({ name: "updatePatientView", info: error }));
};

exports.updatePatient = function(req, res, next) {
	const schema = Joi.object({
		id: Joi.string()
			.trim()
			.required()
			.label("Patient ID")
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
	delete req.body.PatientName;

	Object.entries(req.body).map(([name, number]) => {
		number.split(",").map(value => permissions.push(parseInt(value)));
	});

	updatePatient(validateResult.value.id, permissions)
		.then(info => res.json(info))
		.catch(err => next({ name: "updatePatient", info: err }));
};

exports.removePatient = function(req, res, next) {
	const schema = Joi.object({
		id: Joi.string()
			.trim()
			.required()
			.label("Patient ID")
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

	removePatient(validateResult.value.id)
		.then(info => res.json(info))
		.catch(err => next({ name: "removePatient", info: err }));
};

exports.getPatientDataForUser = function(req, res) {
	getPatientsData(req.query.search ? req.query.search : "").then(data =>
		res.json(
			data.map(Patient => {
				return {
					id: Patient._id,
					text: Patient.name
				};
			})
		)
	);
};